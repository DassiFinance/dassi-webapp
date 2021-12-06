/* eslint-disable import/no-anonymous-default-export */
export default {
  formId: "BorrowerApplicationForm",
  formField: {
    // personalDetails.js
    fullName: {
      name: "fullName",
      label: "Full name *",
      requiredErrorMsg: "Full name is required",
    },
    zipcode: {
      name: "zipcode",
      label: "Zipcode *",
      requiredErrorMsg: "Zipcode is required",
    },
    bio: {
      name: "bio",
      label: "Bio *",
      requiredErrorMsg: "Bio is required",
    },
    income: {
      name: "income",
      label: "Annual income (per annum) *",
      requiredErrorMsg: "Annual income is required",
    },
    occupation: {
      name: "occupation",
      label: "Occupation *",
      requiredErrorMsg: "Occupation is required",
    },
    idDoc: {
      name: "idDoc",
      label: "",
      requiredErrorMsg: "ID Proof required",
    },
    idNumber: {
      name: "idNumber",
      label: "ID details *",
      requiredErrorMsg: "ID Number required",
    },
    imgURL: {
      name: "imgURL",
      label: "Upload a picture of your business *",
      requiredErrorMsg: "Image is required",
    },

    // loanDetails1.js
    loanAmount: {
      name: "loanAmount",
      label: "Loan amount Needed *",
      requiredErrorMsg: "Loan amount is required",
    },
    loanCategory: {
      name: "loanCategory",
      label: "Loan category *",
      requiredErrorMsg: "Loan category is required",
    },
    loanDescription: {
      name: "loanDescription",
      label: "Why you need this loan? *",
      requiredErrorMsg: "Please enter loan description",
    },
    loanDuration: {
      name: "loanDuration",
      label: "Time for which you need loan *",
      requiredErrorMsg: "Please enter valid number of weeks/months/years",
    },
    loanDurationUnit: {
      name: "loanDurationUnit",
      label: "",
      requiredErrorMsg: "Please select weeks/months/years",
    },

    // loanDetails2.js
    repaymentStartDate: {
      name: "repaymentStartDate",
      label: "Repayment starting date *",
      requiredErrorMsg: "Please select a date",
    },
    emiRepetition: {
      name: "emiRepetition",
      label: "EMI repetition *",
      requiredErrorMsg: "Please select a emi repetition",
    },

    // loanDetails3.js
    guarantor: {
      name: "guarantor",
      label: "Choose a guarantor *",
      requiredErrorMsg: "Please select a guarantor",
    },
  },
};
