import React from "react";

import { Typography, Grid } from "@material-ui/core";
const PDReview = (props) => {
  const { formValues } = props;

  const { firstName, lastName, email, zipcode, occupation, bio, income } =
    formValues;
  return (
    <>
      <Typography variant="h6">Personal Details</Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography gutterBottom>First Name*</Typography>
          <Typography gutterBottom>{firstName}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography gutterBottom>Last Name*</Typography>
          <Typography gutterBottom>{lastName}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography gutterBottom>Bio*</Typography>
          <Typography gutterBottom>{bio}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom>Occupation*</Typography>
          <Typography gutterBottom>{occupation}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom>Income*</Typography>
          <Typography gutterBottom>{income}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography gutterBottom>Email*</Typography>
          <Typography gutterBottom>{email}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom>Zipcode*</Typography>
          <Typography gutterBottom>{zipcode}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default PDReview;
