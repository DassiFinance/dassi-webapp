import React from "react";
import { Grid, Typography } from "@material-ui/core";
import InputField from "../../utils/FormFields/InputField";
import SelectField from "../../utils/FormFields/SelectField";

const cities = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "1",
    label: "Mumbai",
  },
  {
    value: "2",
    label: "Banglore",
  },
  {
    value: "3",
    label: "Hyderabad",
  },
];

const states = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "11",
    label: "Maharashtra",
  },
  {
    value: "22",
    label: "Karnataka",
  },
  {
    value: "33",
    label: "Andhra Pradesh",
  },
];

const countries = [
  {
    value: null,
    label: "None",
  },
  {
    value: "111",
    label: "India",
  },
];

export default function LoanDetails2(props) {
  const {
    formField: { firstName, lastName, email, city, state, zipcode, country },
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        LoanDetails1
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        {/*<Grid item xs={12} sm={6}>
          <SelectField
            name={city.name}
            label={city.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={zipcode.name} label={zipcode.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid>*/}
      </Grid>
    </React.Fragment>
  );
}
