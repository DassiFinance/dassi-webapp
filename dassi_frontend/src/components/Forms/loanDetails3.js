import React from "react";
import { Grid, Typography } from "@material-ui/core";
import SelectField from "../../utils/FormFields/SelectField";

const guarantorsAvailable = [
  {
    value: "0",
    label: "Self Approve",
  },
  {
    value: "1",
    label: "Dassi Labs",
  },
];

export default function LoanDetails2(props) {
  const {
    formField: { guarantor },
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        LoanDetails3
      </Typography>
      <Grid container spacing={3}>
        <SelectField
          name={guarantor.name}
          label={guarantor.label}
          data={guarantorsAvailable}
          fullWidth
        />
      </Grid>
    </React.Fragment>
  );
}
