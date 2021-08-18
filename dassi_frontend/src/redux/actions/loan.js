import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api/";
export const sendLoanDetails = (loanDetails) => {
  axios
    .post("loan/create", loanDetails)
    .then((res) => {
      console.log(res.data);
    })
    .then((err) => {
      console.log(err);
    });
};
