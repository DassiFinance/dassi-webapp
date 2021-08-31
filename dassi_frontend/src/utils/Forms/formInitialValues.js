import ApplicationFormModel from "./applicationFormModel";
const {
  formField: {
    // PersonalDetails.js
    fullName,
    zipcode,
    bio,
    income,
    occupation,
    idNumber,
    idDoc,
    imgURL,

    // LoanDetails1.js
    loanAmount,
    loanCategory,
    loanDescription,
    loanDuration,
    loanDurationUnit,

    // LoanDetails2.js
    repaymentStartDate,
    emiRepetition,

    // LoanDetails3.js
    guarantor,
  },
} = ApplicationFormModel;

const DefaultFields = {
  // PersonalDetails.js
  [fullName.name]: "",
  [zipcode.name]: "",
  [bio.name]: "",
  [income.name]: "",
  [occupation.name]: "",
  [idDoc.name]: "",
  [idNumber.name]: "",
  [imgURL.name]: "",

  // LoanDetails1.js
  [loanAmount.name]: "",
  [loanCategory.name]: "",
  [loanDescription.name]: "",
  [loanDuration.name]: "",
  [loanDurationUnit.name]: "",

  // LoanDetails2.js
  [repaymentStartDate.name]: "",
  [emiRepetition.name]: "",

  // LoanDetails3.js
  [guarantor.name]: "",
};
export default DefaultFields;
