import ApplicationFormModel from "./applicationFormModel";
import * as Yup from "yup";
const {
  formField: {
    firstName,
    lastName,
    email,
    zipcode,
    timePeriod,
    occupation,
    bio,
    loanAmount,
    loanCategory,
    loanDescription,
    loanDuration,
    loanDurationUnit,
    repaymentStartDate,
    emiRepetition,
  },
} = ApplicationFormModel;

const validation = [
  Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required(`${email.requiredErrorMsg}`),
    firstName: Yup.string().required(`${firstName.requiredErrorMsg}`),
    lastName: Yup.string().required(`${lastName.requiredErrorMsg}`),
    zipcode: Yup.number().required(`${zipcode.requiredErrorMsg}`),
  }),
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
