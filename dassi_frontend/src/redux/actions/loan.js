import axios from "axios";
import { GET_ACTIVE_LOANS, SET_CATEGORY_FILTER } from "../types";

axios.defaults.baseURL = "http://localhost:8080/api/";
export const sendLoanDetails = (loanDetails) => {
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
    .then((err) => {
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

export const setCategoryFilter = (categoryValue) => (dispatch) => {
  dispatch({
    type: SET_CATEGORY_FILTER,
    payload: categoryValue,
  });
};
