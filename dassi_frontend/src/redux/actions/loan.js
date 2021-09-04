import axios from "axios";
import {
  GET_ACTIVE_LOANS,
  SET_CATEGORY_FILTER,
  GET_LOAN_BY_ID,
  CREATE_LEND_REQUEST,
} from "../types";

axios.defaults.baseURL = "http://ec2-13-233-132-94.ap-south-1.compute.amazonaws.com:8080/api/";
export const sendLoanDetails = (values, history) => {
  const loanDetails = {
    loanAmount: values.loanAmount,
    category: values.loanCategory,
    description: values.loanDescription,
    duration: values.loanDuration
      .toString()
      .concat(" ", values.loanDurationUnit),
    emiRepetition: values.emiRepetition,
    repaymentStartDate: values.repaymentStartDate,
    photo: values.imgURL,
    loanBlockchainStorageAccountPubkey:
      values.loan_blockchain_storage_account_pubkey,
  };
  console.log(loanDetails);
  const formData = new FormData();
  for (var key in loanDetails) {
    if (loanDetails.hasOwnProperty(key)) {
      formData.append(key, loanDetails[key]);
    }
  }
  axios
    .post("loan/create", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then(() => {
      history.push("/");
      console.log("push");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getActiveLoans = (filterCategory) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`loan/activeLoans/${filterCategory}`)
      .then((res) => {
        dispatch({
          type: GET_ACTIVE_LOANS,
          payload: res.data,
        });
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
export const getBorrowedLoans = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`borrower/myLoans`)
      .then((res) => {
        dispatch({
          type: GET_ACTIVE_LOANS,
          payload: res.data,
        });
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
export const makePayment = (amt, id) => (dispatch) => {
  const payment = {
    loanId: id,
    amount: amt,
  };
  console.log(payment);
  axios
    .post(`lender/lend`, payment)
    .then((res) => {
      dispatch({
        type: CREATE_LEND_REQUEST,
        payload: res.data,
      });
    })
    .then(() => {
      dispatch(getLoanDetails(id));
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getLoanDetails = (id) => (dispatch) => {
  axios
    .get(`loan/reqLoan/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_LOAN_BY_ID,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setCategoryFilter = (categoryValue) => (dispatch) => {
  dispatch({
    type: SET_CATEGORY_FILTER,
    payload: categoryValue,
  });
};
