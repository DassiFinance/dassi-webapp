import { Button, Link, makeStyles } from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  Keypair,
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
  TransactionSignature,
} from "@solana/web3.js";
import { useSnackbar, VariantType } from "notistack";
import React, { useCallback } from "react";
import { useNotify } from "./notify";
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

const SendTransaction = () => {
  const classes = useStyles();
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
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: Keypair.generate().publicKey,
          lamports: 1,
        })
      );

      signature = await sendTransaction(transaction, connection);
      notify("info", "Transaction sent:", signature);

      await connection.confirmTransaction(signature, "processed");
      notify("success", "Transaction successful!", signature);
    } catch (error) {
      notify("error", `Transaction failed! ${error.message}`, signature);
      return;
    }
  }, [publicKey, notify, connection, sendTransaction]);

  return (
    <Button className={classes.root} onClick={onClick} disabled={!publicKey}>
      Send Transaction (devnet)
    </Button>
  );
};

export default SendTransaction;
