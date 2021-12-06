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

//Materia-ui style
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#15202B !important",
    color: "#BBF146 !important",
    fontWeight: "500",
    fontSize: "15px",
    textAlign: "center",
    border: "2px solid #BBF146 !important",
    width: "100% !important",
    "&.Mui-disabled": {
      display: "none !important",
    },
  },
}));

const dassiProgramId = new PublicKey(
  "61Yze1wz1D1adaAmuqKnrCBTHhdmW9BmC64Ejv5XK9Hc"
);
var DassiCoinTestTokenMintPubkey = new PublicKey(
  "CajD5MbNz2Vki8aGippFYCuZ5JVzwdeXEhHZLiAgFMZt"
);
var airdropVaultAccountPubkey = new PublicKey(
  "7Ttyu7cq3CAR1kXmuicNMTVv7ZFZgiY9iC1UKjQKH1b"
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

const RequestDassiCoinAirdrop = () => {
  const classes = useStyles();
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const notify = useNotify();
  // calling this function will airdrop 250 DassiCoin Test tokens in user wallet at devnet network
  const onClick = useCallback(async () => {
    if (!publicKey) {
      notify("error", "Wallet not connected!");
      return;
    }

    let signature = "";
    try {
      // store publicKey as string in database User table as user_wallet_pubkey if it is not stored previously for this user
      signature = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL);
      await connection.confirmTransaction(signature, "processed");
      await findAssociatedTokenAddress(
        publicKey,
        DassiCoinTestTokenMintPubkey
      ).then(async function (dassiAssociatedAccPubkey) {
        console.log(dassiAssociatedAccPubkey.toString());
        let isAssociatedAccountExists = true;
        let isUserAlreadyAirdroped = true;

        const createFantAssociatedAccountIx =
          Token.createAssociatedTokenAccountInstruction(
            ASSOCIATED_TOKEN_PROGRAM_ID,
            TOKEN_PROGRAM_ID,
            DassiCoinTestTokenMintPubkey,
            dassiAssociatedAccPubkey,
            publicKey,
            publicKey
          );

        const dassiAirdropUserStorageAccountPk = await PublicKey.createWithSeed(
          publicKey,
          "DassiFinanceAirdrop",
          dassiProgramId
        );

        const createFantAirdropUserStorageDataAccountIx =
          SystemProgram.createAccountWithSeed({
            basePubkey: publicKey,
            fromPubkey: publicKey,
            lamports: await connection.getMinimumBalanceForRentExemption(
              8,
              "confirmed"
            ),
            newAccountPubkey: dassiAirdropUserStorageAccountPk,
            programId: dassiProgramId,
            seed: "DassiFinanceAirdrop",
            space: 8,
          });

        await connection
          .getAccountInfo(dassiAirdropUserStorageAccountPk)
          .then((account_info) => {
            if (account_info?.lamports == undefined) {
              isUserAlreadyAirdroped = false;
            }
          });

        await connection
          .getAccountInfo(dassiAssociatedAccPubkey)
          .then((account_info) => {
            //means user don't have an associated account for Fant Test Tokens, then create it
            if (account_info?.owner.toString() == undefined) {
              isAssociatedAccountExists = false;
            }
          });

        let PDA = await PublicKey.findProgramAddress(
          [Buffer.from("DassiFinanceAirdrop")],
          dassiProgramId
        );

        const getAirdropTokensIx = new TransactionInstruction({
          programId: dassiProgramId,
          keys: [
            {
              pubkey: publicKey,
              isSigner: true,
              isWritable: false,
            },
            {
              pubkey: dassiAirdropUserStorageAccountPk,
              isSigner: false,
              isWritable: true,
            },
            {
              pubkey: dassiAssociatedAccPubkey,
              isSigner: false,
              isWritable: true,
            },
            {
              pubkey: airdropVaultAccountPubkey,
              isSigner: false,
              isWritable: true,
            },

            { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },

            { pubkey: PDA[0], isSigner: false, isWritable: false },
          ],
          data: Buffer.from(Uint8Array.of(9)),
        });

        isUserAlreadyAirdroped = false;
        if (isAssociatedAccountExists) {
          console.log("elifs condition");
          const getAirdropTokensTx = new Transaction().add(getAirdropTokensIx);

          getAirdropTokensTx.feePayer = publicKey;

          signature = await sendTransaction(getAirdropTokensTx, connection);
          notify("info", "Transaction sent:", signature);

          await connection.confirmTransaction(signature, "processed");
          notify("success", "Transaction successful!", signature);
        } else {
          const getAirdropTokensTx = new Transaction().add(
            createFantAssociatedAccountIx,
            createFantAirdropUserStorageDataAccountIx,
            getAirdropTokensIx
          );
          getAirdropTokensTx.feePayer = publicKey;

          signature = await sendTransaction(getAirdropTokensTx, connection);
          notify("info", "Transaction sent:", signature);

          await connection.confirmTransaction(signature, "processed");
          notify("success", "Transaction successful!", signature);
        }
      });
    } catch (error) {
      notify("error", `Transaction failed! ${error.message}`, signature);
      return;
    }
  }, [publicKey, notify, connection, sendTransaction]);

  return (
    <Button className={classes.root} onClick={onClick} disabled={!publicKey}>
      Airdrop DassiCoin (devnet)
    </Button>
  );
};

export default RequestDassiCoinAirdrop;
