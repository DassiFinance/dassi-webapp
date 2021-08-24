import ApplicationFormModel from "./applicationFormModel";
const {
  formField: {
    firstName,
    email,
    lastName,
    city,
    zipcode,
    country,
    astate,
    occupation,
    income,
    bio,
    loanAmount,
    loanCategory,
    loanDescription,
    loanDuration,
    loanDurationUnit,
    repaymentStartDate,
    emiRepetition,
    guarantor,
    imgURL,
    idNumber,
    idDoc,
  },
} = ApplicationFormModel;

const DefaultFields = {
  [firstName.name]: "Rutu",
  [lastName.name]: "Gaglani",
  [email.name]: "rutugaglani@gmail.com",
  [city.name]: "Mumbai",
  [zipcode.name]: "4000057",
  [country.name]: "",
  [astate.name]: "",
  [occupation.name]: "Engineer",
  [bio.name]: "21yrs",
  [income.name]: "1800000",
  [loanAmount.name]: "5000",
  [loanCategory.name]: "None",
  [loanDescription.name]: "Start-up/Bussiness",
  [loanDuration.name]: "5",
  [loanDurationUnit.name]: "Months",
  [repaymentStartDate.name]: "2022-05-24",
  [emiRepetition.name]: "Monthly",
  [guarantor.name]: "Self Approve",
  [imgURL.name]: "",
  [idDoc.name]: "Aadhar Card",
  [idNumber.name]: "165872493",
};
export default DefaultFields;
