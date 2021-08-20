/* eslint-disable import/no-anonymous-default-export */
export default {
  formId: "BorrowerApplicationForm",
  formField: {
    // personalDetails.js
    firstName: {
      name: "firstName",
      label: "First name*",
      requiredErrorMsg: "First name is required",
    },
    lastName: {
      name: "lastName",
      label: "Last name*",
      requiredErrorMsg: "Last name is required",
    },
    email: {
      name: "email",
      label: "Email",
      requiredErrorMsg: "Email is required",
    },
    timePeriod: {
      name: "timePeriod",
      label: "Time Period*",
      requiredErrorMsg: "Time Period is required",
    },
    city: {
      name: "city",
      label: "City*",
      requiredErrorMsg: "City is required",
    },
    astate: {
      name: "state",
      label: "State/Province/Region",
    },
    zipcode: {
      name: "zipcode",
      label: "Zipcode*",
      requiredErrorMsg: "Zipcode is required",
    },
    country: {
      name: "country",
      label: "Country*",
      requiredErrorMsg: "Country is required",
    },
    bio: {
      name: "bio",
      label: "Bio*",
      requiredErrorMsg: "Bio is required",
    },
    occupation: {
      name: "occupation",
      label: "Occupation*",
      requiredErrorMsg: "Occupation is required",
    },
    income: {
      name: "income",
      label: "Annual income (per annum) *",
      requiredErrorMsg: "Annual income is required",
    },
    imgURL: {
      name: "imgURL",
      label: "Image",
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
    loanDescription: {
      name: "loanDescription",
      label: "Why you need this loan?",
      requiredErrorMsg: "Please enter loan description",
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
