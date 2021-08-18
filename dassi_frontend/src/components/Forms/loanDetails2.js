import React from "react";
import { Grid, Typography } from "@material-ui/core";
import SelectField from "../../utils/FormFields/SelectField";
import DateField from "../../utils/FormFields/DateField";

const emiRepetitionUnit = [
  {
    value: "0",
    label: "Weekly",
  },
  {
    value: "1",
    label: "Monthly",
  },
  {
    value: "2",
    label: "Yearly",
  },
];

export default function LoanDetails2(props) {
  const {
    formField: { emiRepetition, repaymentStartDate },
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        LoanDetails2
      </Typography>
      <Grid container spacing={3}>
        <DateField
          id="date"
          label={repaymentStartDate.label}
          type="date"
          defaultValue="2017-05-24"
          name={repaymentStartDate.name}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <SelectField
          name={emiRepetition.name}
          label={emiRepetition.label}
          data={emiRepetitionUnit}
          fullWidth
        />
      </Grid>
    </React.Fragment>
  );
}
