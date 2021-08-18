import ApplicationFormModel from "./applicationFormModel";
const {
  formField: {
    firstName,
    email,
    lastName,
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
    loanDuration,
    loanDurationUnit,
    repaymentStartDate,
    emiRepetition,
  },
} = ApplicationFormModel;

const DefaultFields = {
  [firstName.name]: "",
  [lastName.name]: "",
  [email.name]: "",
  [city.name]: "",
  [zipcode.name]: "",
  [country.name]: "",
  [timePeriod.name]: "",
  [astate.name]: "",
  [occupation.name]: "",
  [bio.name]: "",
  [loanAmount.name]: "",
  [loanCategory.name]: "",
  [loanDescription.name]: "",
  [loanDuration.name]: "",
  [loanDurationUnit.name]: "",
  [repaymentStartDate.name]: "",
  [emiRepetition.name]: "",
};
export default DefaultFields;
