
import { useConnection } from "@solana/wallet-adapter-react";
import {
  PublicKey,
} from "@solana/web3.js";

import * as BufferLayout from "buffer-layout";
import BN from "bn.js";
const toRawAmount = 1000000000;

const LendersArr = (property = "lenders_arr_storage") => {
    return BufferLayout.blob(3250002, property);
  };

  const LENDERS_ARRAY_DATA_ACCOUNT_LAYOUT = BufferLayout.struct([
    LendersArr("lenders_arr"),
  ]);



const { connection } = useConnection();


const DisplayLenderFreeWalletFunds = async () => {
     // display lender free wallet funds, these funds are return by borrower, s/he can withdraw these funds to his crypto wallet whenever they wants

  // lender_blockchain_id for which we want to check free/internal wallet funds
  let lender_id = 5;
  // lender_blockchain_id can vary from 0 to 49_999 included
  
  let readedLendersStorageDataFromBlockChainUint8ArrayEncoded = (await connection.getAccountInfo(
    lendersStorageAccountPubkey,
    "confirmed"
  )).data;

  let readedLendersStorageDataFromBlockChainUint8Array = LENDERS_ARRAY_DATA_ACCOUNT_LAYOUT.decode(
    readedLendersStorageDataFromBlockChainUint8ArrayEncoded
  );
  let totalLendingAmountSi = 65*lender_id + 2 + 33;
  let totalLendingAmountEi = totalLendingAmountSi + 16;
  let totalUniqueLendingAmountEi = totalLendingAmountEi + 8;
  let freeWalletFundsAmountEi = totalUniqueLendingAmountEi + 8;
  
  let total_lending_amount_raw = new BN(
    readedLendersStorageDataFromBlockChainUint8Array.lenders_arr.slice(
      totalLendingAmountSi,
      totalLendingAmountEi
    ),
    10,
    "le"
  ).toNumber();
  

  let total_unique_lending_amount_raw = new BN(
    readedLendersStorageDataFromBlockChainUint8Array.lenders_arr.slice(
      totalLendingAmountEi,
      totalUniqueLendingAmountEi
    ),
    10,
    "le"
  ).toNumber();

    let amount_to_withdraw_or_lend_raw = new BN(
    readedLendersStorageDataFromBlockChainUint8Array.lenders_arr.slice(
      totalUniqueLendingAmountEi,
      freeWalletFundsAmountEi
    ),
    10,
    "le"
  ).toNumber();
  let total_lending_amount = total_lending_amount_raw / toRawAmount;
  let total_unique_lending_amount = total_unique_lending_amount_raw / toRawAmount;
  let amount_to_withdraw_or_lend = amount_to_withdraw_or_lend_raw / toRawAmount;
  console.log("Total DassiCoin Lended by the lender till now: ", total_lending_amount);
  console.log("Total Unique DassiCoin lended by the borrower till now: ", total_unique_lending_amount);
  console.log("Amount of DassiCoin that lender can withdraw to his crypto wallet: ", amount_to_withdraw_or_lend);
  
  };
  export default DisplayLenderFreeWalletFunds;