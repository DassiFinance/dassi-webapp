import {
  FormControlLabel,
  Switch,
  Tooltip,
  makeStyles,
} from "@material-ui/core";

import {
  WalletConnectButton as MaterialUIWalletConnectButton,
  WalletDialogButton as MaterialUIWalletDialogButton,
  WalletDialogProvider as MaterialUIWalletDialogProvider,
  WalletDisconnectButton as MaterialUIWalletDisconnectButton,
  WalletMultiButton as MaterialUIWalletMultiButton,
} from "@solana/wallet-adapter-material-ui";
import {
  ConnectionProvider,
  useLocalStorage,
  WalletProvider,
  useWallet,
} from "@solana/wallet-adapter-react";
import {
  getPhantomWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { useSnackbar } from "notistack";
import React, { useCallback, useMemo } from "react";
import RequestAirdrop from "./requestAirdrop";
import SendTransaction from "./sendTransaction";

const useStyles = makeStyles((theme) => ({
  multiBtn: {
    backgroundColor: "#BBF146 !important",
    color: "#15202B !important",
    fontWeight: "500",
    fontSize: "15px",
    textAlign: "center",
    width: "100% !important",
  },
  disconnectBtn: {
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
  root: {
    "& .MuiDialog-paper": {
      width: theme.spacing(40),
      margin: 0,
    },
    "& .MuiDialogTitle-root": {
      backgroundColor: "#BBF146",
      "& .MuiTypography-root": {
        display: "flex",
        justifyContent: "space-between",
        lineHeight: theme.spacing(5) + "px",
      },
      "& .MuiIconButton-root": {
        flexShrink: 1,
        padding: theme.spacing(),
        marginRight: theme.spacing(-1),
        color: "#15202B",
      },
    },
    "& .MuiDialogContent-root": {
      padding: 0,
      "& .MuiCollapse-root": {
        "& .MuiList-root": {
          background: "#15202B",
        },
      },
      "& .MuiList-root": {
        background: "#15202B",
        padding: 0,
      },
      "& .MuiListItem-root": {
        boxShadow: "inset 0 1px 0 0 " + "rgba(255, 255, 255, 0.1)",
        "&:hover": {
          boxShadow:
            "inset 0 1px 0 0 " +
            "rgba(255, 255, 255, 0.1)" +
            ", 0 1px 0 0 " +
            "rgba(255, 255, 255, 0.05)",
        },
        padding: 0,
        "& .MuiButton-endIcon": {
          margin: 0,
        },
        "& .MuiButton-root": {
          flexGrow: 1,
          justifyContent: "space-between",
          padding: theme.spacing(1, 3),
          borderRadius: undefined,
          fontSize: "1rem",
          fontWeight: 400,
          color: "#fff",
        },
        "& .MuiSvgIcon-root": {
          color: "#15202B",
        },
      },
    },
  },
}));

const Wallet = () => {
  const classes = useStyles();
  const endpoint = useMemo(() => clusterApiUrl("devnet"), []);
  const [autoConnect, setAutoConnect] = useLocalStorage("autoConnect", true);
  const wallets = useMemo(() => [getPhantomWallet(), getSolletWallet()], []);

  const { enqueueSnackbar } = useSnackbar();
  const onError = useCallback(
    (error) => {
      enqueueSnackbar(
        error.message ? `${error.name}: ${error.message}` : error.name,
        { variant: "error" }
      );
      console.error(error);
    },
    [enqueueSnackbar]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        wallets={wallets}
        onError={onError}
        autoConnect={autoConnect}
      >
        {console.log(endpoint)}
        <MaterialUIWalletDialogProvider className={classes.root}>
          <div style={{ marginTop: "5%" }}>
            <MaterialUIWalletMultiButton className={classes.multiBtn} />
          </div>
          <div style={{ marginTop: "5%" }}>
            <MaterialUIWalletDisconnectButton
              className={classes.disconnectBtn}
            />
          </div>
          <div style={{ marginTop: "5%" }}>
            {" "}
            <RequestAirdrop />
          </div>
          <div style={{ marginTop: "5%" }}>
            <SendTransaction />
          </div>
        </MaterialUIWalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
export default Wallet;
