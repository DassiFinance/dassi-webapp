import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import SelectField from "../../utils/FormFields/SelectField";
import DateField from "../../utils/FormFields/DateField";

import useStyles from "../../css/baForm";
const emiRepetitionUnit = [
  {
    value: "Weekly",
    label: "Weekly",
  },
  {
    value: "Monthly",
    label: "Monthly",
  },
  {
    value: "Yearly",
    label: "Yearly",
  },
];

export default function LoanDetails2(props) {
  const {
    formField: { emiRepetition, repaymentStartDate },
  } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.subHeader}>
        Repayment Details
      </Typography>
      <Container>
        <Grid container className={classes.ba_ld2_grid}>
          <DateField
            id="date"
            label={repaymentStartDate.label}
            type="date"
            name={repaymentStartDate.name}
          />
          <SelectField
            name={emiRepetition.name}
            label={emiRepetition.label}
            data={emiRepetitionUnit}
            fullWidth
          />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
