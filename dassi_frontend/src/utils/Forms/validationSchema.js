import ApplicationFormModel from "./applicationFormModel";
import * as Yup from "yup";
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
    // guarantor,
  },
} = ApplicationFormModel;

const validation = [
  // PersonalDetails.js
  Yup.object().shape({
    fullName: Yup.string().required(`${fullName.requiredErrorMsg}`),
    zipcode: Yup.number().required(`${zipcode.requiredErrorMsg}`),
    income: Yup.number().required(`${income.requiredErrorMsg}`),
    occupation: Yup.string().required(`${occupation.requiredErrorMsg}`),
    bio: Yup.string().required(`${bio.requiredErrorMsg}`),
    imgURL: Yup.string().required(`${imgURL.requiredErrorMsg}`),
    idDoc: Yup.string().required(`${idDoc.requiredErrorMsg}`),
    idNumber: Yup.string().required(`${idNumber.requiredErrorMsg}`),
  }),

  // LoanDetails1.js
  Yup.object().shape({
    loanAmount: Yup.number().required(`${loanAmount.requiredErrorMsg}`),
    loanCategory: Yup.string().required(`${loanCategory.requiredErrorMsg}`),
    loanDescription: Yup.string().required(
      `${loanDescription.requiredErrorMsg}`
    ),
    loanDurationUnit: Yup.string().required(
      `${loanDurationUnit.requiredErrorMsg}`
    ),
    loanDuration: Yup.number().required(`${loanDuration.requiredErrorMsg}`),
  }),

  // LoanDetails2.js
  Yup.object().shape({
    todaysDate: Yup.date().default(function () {
      return new Date();
    }),
    emiRepetition: Yup.string().required(`${emiRepetition.requiredErrorMsg}`),
    repaymentStartDate: Yup.date()
      .min(Yup.ref("todaysDate"), "Repayment start date has already passed")
      .required(`${repaymentStartDate.requiredErrorMsg}`),
  }),
];
export default validation;
