import {
  FormControlLabel,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@material-ui/core";
/* import {
  WalletConnectButton as AntDesignWalletConnectButton,
  WalletDisconnectButton as AntDesignWalletDisconnectButton,
  WalletModalButton as AntDesignWalletModalButton,
  WalletModalProvider as AntDesignWalletModalProvider,
  WalletMultiButton as AntDesignWalletMultiButton,
} from "@solana/wallet-adapter-ant-design";*/
import { WalletError } from "@solana/wallet-adapter-base";
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
  getBitpieWallet,
  getCoin98Wallet,
  getLedgerWallet,
  getMathWallet,
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolongWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { useSnackbar } from "notistack";
import React, { useCallback, useMemo } from "react";
//import { version } from "../package.json";
import RequestAirdrop from "../components/wallet/requestAirdrop";
import SendTransaction from "../components/wallet/sendTransaction";

const Wallet = () => {
  const endpoint = useMemo(() => clusterApiUrl("devnet"), []);
  const [autoConnect, setAutoConnect] = useLocalStorage("autoConnect", false);

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
        <MaterialUIWalletDialogProvider>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width={200}>Component</TableCell>
                <TableCell width={200}>Material UI</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Connect Button</TableCell>
                <TableCell>
                  <MaterialUIWalletConnectButton />
                </TableCell>

                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Disconnect Button</TableCell>
                <TableCell>
                  <MaterialUIWalletDisconnectButton />
                </TableCell>

                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dialog/Modal Button</TableCell>
                <TableCell>
                  <MaterialUIWalletDialogButton />
                </TableCell>

                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Multi Button</TableCell>
                <TableCell>
                  <MaterialUIWalletMultiButton />
                </TableCell>

                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>
                  <Tooltip
                    title="Only runs if the wallet is ready to connect"
                    placement="left"
                  >
                    <FormControlLabel
                      control={
                        <Switch
                          name="autoConnect"
                          color="secondary"
                          checked={autoConnect}
                          onChange={(event, checked) => setAutoConnect(checked)}
                        />
                      }
                      label="AutoConnect"
                    />
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <RequestAirdrop />
                </TableCell>
                <TableCell>
                  <SendTransaction />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </MaterialUIWalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
export default Wallet;
