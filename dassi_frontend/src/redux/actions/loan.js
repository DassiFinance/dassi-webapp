import axios from "axios";

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
