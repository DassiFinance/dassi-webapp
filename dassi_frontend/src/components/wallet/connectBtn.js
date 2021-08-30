import { FormControlLabel, Switch, Tooltip } from "@material-ui/core";

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

const Wallet = () => {
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
        <MaterialUIWalletDialogProvider>
          <div style={{ marginTop: "5%" }}>
            <MaterialUIWalletMultiButton />
          </div>
          <div style={{ marginTop: "5%" }}>
            <MaterialUIWalletDisconnectButton />
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
