
import { useConnection } from "@solana/wallet-adapter-react";
import {
  PublicKey,
} from "@solana/web3.js";

import * as BufferLayout from "buffer-layout";
import BN from "bn.js";
const toRawAmount = 1000000000;

const LoanInfoArr = (property = "laon_info_arr_storage") => {
  return BufferLayout.blob(9916, property);
};

const LOAN_INFO_ACCOUNT_LAYOUT = BufferLayout.struct([
  LoanInfoArr("loan_info_arr"),
]);


const { connection } = useConnection();


const DisplayFundsCollectedForLoan = async () => {
    // display loan data of a loan
    // take loanInfoStorageAccount_pk_str as input to this function for the loan we want to display funds collected
    let loanInfoStorageAccount_pk_str = "AcXNSgRW7UD2Uyf4SNe9yabELkExYR9vfE6eRG3rfKU8";
  
    let readedLoanInfoDataFromBlockChainUint8ArrayEncoded = (await connection.getAccountInfo(
      new PublicKey(loanInfoStorageAccount_pk_str),
      "confirmed"
    )).data;
  
    let readedLoanInfoDataFromBlockChainUint8Array = LOAN_INFO_ACCOUNT_LAYOUT.decode(
      readedLoanInfoDataFromBlockChainUint8ArrayEncoded
    );
    let total_loan_amount_si = 89;
    let total_loan_amount_ei = 97;
    let total_amount_lended_ei = 105;
    
    let total_loan_amount_raw = new BN(
      readedLoanInfoDataFromBlockChainUint8Array.loan_info_arr.slice(
        total_loan_amount_si,
        total_loan_amount_ei
      ),
      10,
      "le"
    ).toNumber();
    let total_loan_amount = total_loan_amount_raw / toRawAmount;
  
    let total_amount_lended_raw = new BN(
      readedLoanInfoDataFromBlockChainUint8Array.loan_info_arr.slice(
        total_loan_amount_ei,
        total_amount_lended_ei
      ),
      10,
      "le"
    ).toNumber();
  
    let total_amount_lended = total_amount_lended_raw / toRawAmount;
    // you can use these variables as return types 
    console.log("Borrower Applied for: ", total_loan_amount);
    console.log("Fundraised amount till now: ", total_amount_lended);
  
  };
  export default DisplayFundsCollectedForLoan;