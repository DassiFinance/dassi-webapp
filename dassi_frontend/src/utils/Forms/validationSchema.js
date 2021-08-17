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
    loanDurationUnit,
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
    loanDuration: Yup.number().required(`${loanDurationUnit.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    // occupation: Yup.string().required(`${occupation.requiredErrorMsg}`),
  }),
];
export default validation;
