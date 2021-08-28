import React, { useMemo } from "react";
import { WalletProvider } from "@solana/wallet-adapter-react";
import {
  getPhantomWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";
import {
  WalletDialogProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-material-ui";

const Wallet = () => {
  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you want to instantiate here will be compiled into your application
  const wallets = useMemo(() => [getPhantomWallet(), getSolletWallet()], []);

  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletDialogProvider>
        <WalletMultiButton />
        <WalletDisconnectButton />
      </WalletDialogProvider>
    </WalletProvider>
  );
};
export default Wallet;
