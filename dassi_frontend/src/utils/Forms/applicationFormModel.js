/* eslint-disable import/no-anonymous-default-export */
export default {
  formId: "BorrowerApplicationForm",
  formField: {
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
    amount: {
      name: "amount",
      label: "Amount*",
      requiredErrorMsg: "Amount is required",
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
    loanAmount: {
      name: "loanAmmount",
      label: "Loan Ammount Needed *",
      requiredErrorMsg: "Loan Ammount is required",
    },
    loanCategory: {
      name: "loanCategory",
      label: "Loan category *",
      requiredErrorMsg: "Loan Category is required",
    },
    loanDuration: {
      name: "loanDuration",
      label: "Time for which you need loan *",
      requiredErrorMsg: "Please select loan Duration",
    },
    loanDurationUnit: {
      name: "loanDurationUnit",
      label: "Please select weeks/months/years *",
      requiredErrorMsg: "Please select weeks/months/years",
    },
    loanDescription: {
      name: "loanDescription",
      label: "Why you need this loan?",
      requiredErrorMsg: "Please enter loan description",
    },
    // repaymentStartDate : {
    //   name:"repaymentStartDate",
    //   label : ""
    // }
  },
};
