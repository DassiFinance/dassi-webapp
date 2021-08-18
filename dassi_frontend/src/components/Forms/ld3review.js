import React from "react";
import { Typography, Grid } from "@material-ui/core";
const LD1Review = (props) => {
  const { formValues } = props;
  const { guarantor } = formValues;
  return (
    <>
      <Typography variant="h6">Select Gaurantor </Typography>
      <Grid container>
        <Grid item xs={12}>
          <Typography gutterBottom>Gaurantor*</Typography>
          <Typography gutterBottom>{guarantor.name}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default LD1Review;
