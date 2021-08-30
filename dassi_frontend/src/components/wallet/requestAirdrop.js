import { Button, makeStyles } from "@material-ui/core";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, TransactionSignature } from "@solana/web3.js";
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

const RequestAirdrop = () => {
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
      signature = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL);
      notify("info", "Airdrop requested:", signature);

      await connection.confirmTransaction(signature, "processed");
      notify("success", "Airdrop successful!", signature);
    } catch (error) {
      notify("error", `Airdrop failed! ${error.message}`, signature);
    }
  }, [publicKey, notify, connection, sendTransaction]);

  return (
    <Button className={classes.root} onClick={onClick} disabled={!publicKey}>
      Request Airdrop
    </Button>
  );
};

export default RequestAirdrop;
