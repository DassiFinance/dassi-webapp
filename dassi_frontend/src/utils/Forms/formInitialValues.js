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
};
export default DefaultFields;
