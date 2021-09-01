import { Button, Link, makeStyles } from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  Keypair,
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
  TransactionSignature,
  PublicKey,
  TransactionInstruction,
} from "@solana/web3.js";
import {
  AccountLayout,
  Token,
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { useSnackbar, VariantType } from "notistack";
import React, { useCallback } from "react";
import { useNotify } from "./notify";

import * as BufferLayout from "buffer-layout";
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

const PayEmi = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const notify = useNotify();

  const onClick = useCallback(async () => {
    if (!publicKey) {
      notify("error", "Wallet not connected!");
      return;
    }

    let signature = "";
    try {
      let emi_paying_amount = 80;
      // read borrowerStorageAccount_pk_c and loanInfoStorageAccount_pk_c from database and pass as string to new PublicKey() below
      // if user is seeing a loan in My loans -> Borrow then borrowerStorageAccount_pk_c, loanInfoStorageAccount_pk_c must have a value as string
      // but for any case if borrowerStorageAccount_pk_c and loanInfoStorageAccount_pk_c is empty, throw error/notify user
      // user can pay his emi by clicking on pay emi button
      var borrowerStorageAccount_pk_c = new PublicKey(
        "6VtwpSZvVLmSLUZGo3g3PmpWq4HJSu4Mp1ZPxHMHCTsQ"
      );
      var loanInfoStorageAccount_pk_c = new PublicKey(
        "AcXNSgRW7UD2Uyf4SNe9yabELkExYR9vfE6eRG3rfKU8"
      );

      let rawEMIAmount = emi_paying_amount * toRawAmount;
      let borrowerStorageAccountPk = borrowerStorageAccount_pk_c;
      let loanInfoStorageAccountPk = loanInfoStorageAccount_pk_c;
      await findAssociatedTokenAddress(
        publicKey,
        DassiCoinTestTokenMintPubkey
      ).then(async (dassiAssociatedAccPubkey) => {
        const payEMIusingDassiCoinIx = new TransactionInstruction({
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
              pubkey: borrowerStorageAccountPk,
              isSigner: false,
              isWritable: true,
            },
            { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
            {
              pubkey: loanInfoStorageAccountPk,
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
            Uint8Array.of(7, ...new BN(rawEMIAmount).toArray("le", 8))
          ),
        });
        const payEMIusingDassiCoinTx = new Transaction().add(
          payEMIusingDassiCoinIx
        );
        payEMIusingDassiCoinTx.feePayer = publicKey;

        signature = await sendTransaction(payEMIusingDassiCoinTx, connection);
        notify("info", "Transaction sent:", signature);

        await connection.confirmTransaction(signature, "processed");
        notify("success", "Transaction successful!", signature);

        // Call api to update the loan repaid amount/emi payment

      });
    } catch (error) {
      notify("error", `Transaction failed! ${error.message}`, signature);
      return;
    }
  }, [publicKey, notify, connection, sendTransaction]);

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={onClick}
      disabled={!publicKey}
    >
      Pay EMI
    </Button>
  );
};

export default PayEmi;
