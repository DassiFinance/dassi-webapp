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
};
export default DefaultFields;
