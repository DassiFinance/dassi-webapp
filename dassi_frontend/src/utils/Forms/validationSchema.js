import ApplicationFormModel from "./applicationFormModel";
import * as Yup from "yup";
const {
  formField: {
    firstName,
    lastName,
    email,
    amount,
    city,
    zipcode,
    country,
    timePeriod,
    astate,
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
    //city: Yup.string().required(`${city.requiredErrorMsg}`),
    //country: Yup.string().required(`${country.requiredErrorMsg}`),
    //astate: Yup.string().required(`${astate.requiredErrorMsg}`),
    //bio: Yup.string().required(`${bio.requiredErrorMsg}`),
    zipcode: Yup.number().required(`${zipcode.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    // loanAmount: Yup.string().required(`${loanAmount.requiredErrorMsg}`),
    loanCategory: Yup.number().required(`${loanCategory.requiredErrorMsg}`),
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
