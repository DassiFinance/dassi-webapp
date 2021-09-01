import { Button } from "@material-ui/core";
import useStyles from "../../css/loanInfo";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  Transaction,
  PublicKey,
  TransactionInstruction,
} from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import React, { useCallback } from "react";
import { useNotify } from "./notify";
import { useSelector, useDispatch } from "react-redux";
import { makePayment } from "../../redux/actions/loan";

import BN from "bn.js";
const toRawAmount = 1000000000;

const dassiProgramId = new PublicKey(
  "61Yze1wz1D1adaAmuqKnrCBTHhdmW9BmC64Ejv5XK9Hc"
);
var DassiCoinTestTokenMintPubkey = new PublicKey(
  "CajD5MbNz2Vki8aGippFYCuZ5JVzwdeXEhHZLiAgFMZt"
);
var dassiVaultAccountPubkey = new PublicKey(
  "GzutkMicWJq58ksfkqTUAyWZQc5Rn3zcXweas43421Vy"
);

var lendersStorageAccountPubkey = new PublicKey(
  "48JzJLpMKJjjxfPWk9yn5yefuJGKsDX1cDG42vRghpFG"
);
const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new PublicKey(
  "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
);

async function findAssociatedTokenAddress(walletAddress, tokenMintAddress) {
  return (
    await PublicKey.findProgramAddress(
      [
        walletAddress.toBuffer(),
        TOKEN_PROGRAM_ID.toBuffer(),
        tokenMintAddress.toBuffer(),
      ],
      SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
    )
  )[0];
}

const LendToBorrower = ({ amount, loanId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const notify = useNotify();

  const lender_blockchain_id = useSelector(
    (state) => state.user.credentials.lenderBlockchainId
  );
  const loan_blockchain_storage_account_pubkey = useSelector(
    (state) => state.loan.loanDetails.loanBlockchainStorageAccountPubkey
  );
  const onClick = useCallback(async () => {
    if (!publicKey) {
      notify("error", "Wallet not connected!");
      return;
    }

    let signature = "";
    try {
      // replace below with user input
      let amount_to_lend_input = amount;

      // read lender_blockchain_id from database and replace below, if its not there that means lender is lending for first time,
      // increment last stored lender_blockchain_id and store, use it
      let lender_id_input = lender_blockchain_id;

      //  read loanInfoStorageAccountPubkey from database laon table (loan_blockchain_storage_account_pubkey) for which the borrower wants to lend
      let loanInfoStorageAccountPubkey = new PublicKey(
        loan_blockchain_storage_account_pubkey
      );

      let amount_to_lend_raw = amount_to_lend_input * toRawAmount;
      await findAssociatedTokenAddress(
        publicKey,
        DassiCoinTestTokenMintPubkey
      ).then(async (dassiAssociatedAccPubkey) => {
        const lendToBorrowerIx = new TransactionInstruction({
          programId: dassiProgramId,
          keys: [
            {
              pubkey: publicKey,
              isSigner: true,
              isWritable: false,
            },
            {
              pubkey: dassiAssociatedAccPubkey,
              isSigner: false,
              isWritable: true,
            },
            {
              pubkey: dassiVaultAccountPubkey,
              isSigner: false,
              isWritable: true,
            },
            {
              pubkey: TOKEN_PROGRAM_ID,
              isSigner: false,
              isWritable: false,
            },
            {
              pubkey: loanInfoStorageAccountPubkey,
              isSigner: false,
              isWritable: true,
            },
            {
              pubkey: lendersStorageAccountPubkey,
              isSigner: false,
              isWritable: true,
            },
          ],
          data: Buffer.from(
            Uint8Array.of(
              0,
              ...new BN(amount_to_lend_raw).toArray("le", 8),
              ...new BN(lender_id_input).toArray("le", 4)
            )
          ),
        });
        const lendToBorrowerTx = new Transaction().add(lendToBorrowerIx);
        lendToBorrowerTx.feePayer = publicKey;

        signature = await sendTransaction(lendToBorrowerTx, connection);
        notify("info", "Transaction sent:", signature);

        await connection
          .confirmTransaction(signature, "processed")
          .then((res) => {
            dispatch(makePayment(amount, loanId));
          });
        notify("success", "Transaction successful!", signature);
      });
    } catch (error) {
      notify("error", `Transaction failed! ${error.message}`, signature);
      return;
    }
  }, [publicKey, notify, connection, sendTransaction]);

  return (
    <Button
      className={classes.loanCard_supportBtn}
      onClick={onClick}
      disabled={!publicKey}
    >
      Lend (DassiCoin devnet)
    </Button>
  );
};

export default LendToBorrower;
