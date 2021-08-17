import ApplicationFormModel from "./applicationFormModel";
const {
  formField: {
    firstName,
    email,
    lastName,
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
    loanDuration,
    loanDurationUnit,
  },
} = ApplicationFormModel;

const DefaultFields = {
  [firstName.name]: "",
  [lastName.name]: "",
  [email.name]: "",
  [amount.name]: "",
  [city.name]: "",
  [zipcode.name]: "",
  [country.name]: "",
  [timePeriod.name]: "",
  [astate.name]: "",
  [occupation.name]: "",
  [bio.name]: "",
  [loanAmount.name]: "",
  [loanCategory.name]: 0,
  [loanDescription.name]: "",
  [loanDuration.name]: "",
  [loanDurationUnit.name]: "",
};
export default DefaultFields;
