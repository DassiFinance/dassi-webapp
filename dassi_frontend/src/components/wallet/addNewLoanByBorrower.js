import { Button } from "@material-ui/core";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  Keypair,
  SystemProgram,
  Transaction,
  PublicKey,
  TransactionInstruction,
} from "@solana/web3.js";

import React, { useCallback } from "react";
import { useNotify } from "./notify";

import * as BufferLayout from "buffer-layout";
import BN from "bn.js";
import { useSelector, useDispatch } from "react-redux";
import { sendLoanDetails } from "../../redux/actions/loan";
import { sendUserDetails } from "../../redux/actions/user";

const toRawAmount = 1000000000;

const LoanInfoArr = (property = "laon_info_arr_storage") => {
  return BufferLayout.blob(9916, property);
};

const LOAN_INFO_ACCOUNT_LAYOUT = BufferLayout.struct([
  LoanInfoArr("loan_info_arr"),
]);

const dassiProgramId = new PublicKey(
  "61Yze1wz1D1adaAmuqKnrCBTHhdmW9BmC64Ejv5XK9Hc"
);

const uint64 = (property = "uint64") => {
  return BufferLayout.blob(8, property);
};
const publicKey = (property = "publicKey") => {
  return BufferLayout.blob(32, property);
};
const BORROWER_ACCOUNT_LAYOUT = BufferLayout.struct([
  BufferLayout.u8("isInitialized"),
  BufferLayout.u8("TYPE"),
  BufferLayout.u8("is_active_loan"),
  publicKey("borrower_main_acc_pubkey"),
  uint64("credit_score"),
  publicKey("active_loan_address"),
]);

const AddNewLoanByBorrower = ({ values, history }) => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const notify = useNotify();
  const publicKeyFromDatabase = useSelector(
    (state) => state.user.credentials.walletId
  );
  const dispatch = useDispatch();

  const onClick = useCallback(async () => {
    if (!publicKey) {
      notify("error", "Wallet not connected!");
      return;
    }

    let signature = "";
    try {
      // replace below variables with input from the borrower, or you can take these fields as input to the function
      let num_days_left_for_first_repayment_input = 50;
      let num_emis_needed_to_repay_the_loan_input = 35;
      let num_days_for_fundraising_input = 25;
      let total_loan_amount_input = parseInt(values.loanAmount);

      // for prototype borrower is acting as guarantor
      let createBorrowerStorageAccountFlag = true;
      let borrowerStorageAccount_pk_r;

      // read borrowerStorageAccount_pk_r from database (borrower_blockchain_storage_account_pubkey) and if its empty, then set createBorrowerStorageAccountFlag to true
      // if its not empty pass that string to PublicKey() below
      if (publicKeyFromDatabase) {
        borrowerStorageAccount_pk_r = publicKeyFromDatabase;
        createBorrowerStorageAccountFlag = false;
        values.walletId = borrowerStorageAccount_pk_r.toString();
      }

      let borrowerMainAccount_pk_r = publicKey;
      let borrowerStorageAccount = Keypair.generate();
      if (createBorrowerStorageAccountFlag) {
        borrowerStorageAccount_pk_r = borrowerStorageAccount.publicKey;
        values.walletId = borrowerStorageAccount_pk_r.toString();
      }

      let total_loan_amount_raw = total_loan_amount_input * toRawAmount;
      const loanInfoStorageAccount = Keypair.generate();
      const createLoanInfoAccountIx = SystemProgram.createAccount({
        space: LOAN_INFO_ACCOUNT_LAYOUT.span,
        lamports: await connection.getMinimumBalanceForRentExemption(
          LOAN_INFO_ACCOUNT_LAYOUT.span,
          "confirmed"
        ),
        fromPubkey: publicKey,
        newAccountPubkey: loanInfoStorageAccount.publicKey,
        programId: dassiProgramId,
      });
      const initLoanInfoIx = new TransactionInstruction({
        programId: dassiProgramId,
        keys: [
          {
            pubkey: publicKey,
            isSigner: true,
            isWritable: false,
          },
          {
            pubkey: borrowerMainAccount_pk_r,
            isSigner: false,
            isWritable: false,
          },

          {
            pubkey: loanInfoStorageAccount.publicKey,
            isSigner: false,
            isWritable: true,
          },
          {
            pubkey: borrowerStorageAccount_pk_r,
            isSigner: false,
            isWritable: true,
          },
        ],
        data: Buffer.from(
          Uint8Array.of(
            8,
            ...new BN(num_days_left_for_first_repayment_input).toArray("le", 2),
            ...new BN(num_emis_needed_to_repay_the_loan_input).toArray("le", 2),
            ...new BN(num_days_for_fundraising_input).toArray("le", 2),
            ...new BN(total_loan_amount_raw).toArray("le", 8)
          )
        ),
      });

      if (createBorrowerStorageAccountFlag) {
        let createBorrowerDataAccountIx = SystemProgram.createAccount({
          space: BORROWER_ACCOUNT_LAYOUT.span,
          lamports: await connection.getMinimumBalanceForRentExemption(
            BORROWER_ACCOUNT_LAYOUT.span,
            "confirmed"
          ),
          fromPubkey: publicKey,
          newAccountPubkey: borrowerStorageAccount.publicKey,
          programId: dassiProgramId,
        });

        let initBorrowerDataAccountIx = new TransactionInstruction({
          programId: dassiProgramId,
          keys: [
            {
              pubkey: publicKey,
              isSigner: true,
              isWritable: false,
            },
            {
              pubkey: borrowerStorageAccount.publicKey,
              isSigner: false,
              isWritable: true,
            },
          ],
          data: Buffer.from(Uint8Array.of(5)),
        });

        console.log("called");
        const createAndInitializeLoanInfoAccountTx = new Transaction().add(
          createBorrowerDataAccountIx,
          initBorrowerDataAccountIx,
          createLoanInfoAccountIx,
          initLoanInfoIx
        );
        createAndInitializeLoanInfoAccountTx.recentBlockhash = (
          await connection.getRecentBlockhash()
        ).blockhash;

        createAndInitializeLoanInfoAccountTx.feePayer = publicKey;
        createAndInitializeLoanInfoAccountTx.sign(
          borrowerStorageAccount,
          loanInfoStorageAccount
        );

        signature = await sendTransaction(
          createAndInitializeLoanInfoAccountTx,
          connection
        );
        notify("info", "Transaction sent:", signature);

        await connection
          .confirmTransaction(signature, "processed")
          .then((res) => {
            // Creating the loan in our database
            dispatch(sendUserDetails(values));
            sendLoanDetails(values, history);
          });
        notify("success", "Transaction successful!", signature);

        // return/save loanInfoStorageAccount.publicKey and store this in database as loan for current borrower
        // also return/save borrowerStorageAccount.publicKey
      } else {
        console.log("called");
        const createAndInitializeLoanInfoAccountTx = new Transaction().add(
          createLoanInfoAccountIx,
          initLoanInfoIx
        );
        createAndInitializeLoanInfoAccountTx.recentBlockhash = (
          await connection.getRecentBlockhash()
        ).blockhash;

        createAndInitializeLoanInfoAccountTx.feePayer = publicKey;
        createAndInitializeLoanInfoAccountTx.sign(loanInfoStorageAccount);

        signature = await sendTransaction(
          createAndInitializeLoanInfoAccountTx,
          connection
        );
        notify("info", "Transaction sent:", signature);

        await connection
          .confirmTransaction(signature, "processed")
          .then((res) => {
            // Creating the loan in our database
            dispatch(sendUserDetails(values));
            sendLoanDetails(values, history);
          });
        notify("success", "Transaction successful!", signature);

        // return/save loanInfoStorageAccount.publicKey and store this in database as loan for current borrower
      }
    } catch (error) {
      notify("error", `Transaction failed! ${error.message}`, signature);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey, notify, connection, sendTransaction]);

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={onClick}
      disabled={!publicKey}
    >
      Submit Loan Application
    </Button>
  );
};

export default AddNewLoanByBorrower;
