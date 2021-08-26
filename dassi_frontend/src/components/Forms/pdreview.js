import React, { useState, useEffect } from "react";
import useStyles from "../../css/baForm";
import { Typography, Grid } from "@material-ui/core";
const PDReview = (props) => {
  const { formValues } = props;
  const [preview, setPreview] = useState("");
  const classes = useStyles();
  const {
    firstName,

    zipcode,
    occupation,
    bio,
    income,
    idDoc,
    idNumber,
    imgURL,
  } = formValues;

  useEffect(() => {
    if (imgURL) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.readyState === 2) {
          console.log(fileReader.result);
          setPreview(fileReader.result);
        }
      };
      fileReader.readAsDataURL(imgURL);
    }
  }, [imgURL]);
  return (
    <>
      <Typography variant="h6" className={classes.review_subheader}>
        Personal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            First Name *
          </Typography>
          <div className={classes.review_textFieldInput}>{firstName}</div>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Zipcode *
          </Typography>
          <div className={classes.review_textFieldInput}>{zipcode}</div>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom className={classes.textCommon}>
            Bio *
          </Typography>
          <div className={classes.review_textFieldInput}>{bio}</div>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Occupation *
          </Typography>
          <div className={classes.review_textFieldInput}> {occupation}</div>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom className={classes.textCommon}>
            Income *
          </Typography>
          <div className={classes.review_textFieldInput}>{income}</div>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom className={classes.textCommon}>
            ID Details *
          </Typography>
          <div className={classes.textFieldInput}>
            {idDoc}
            {" : "}
            {idNumber}
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom className={classes.textCommon}>
            Picture of your business *
          </Typography>
          <img src={preview} className={classes.imageDiv} alt="" />
        </Grid>
      </Grid>
    </>
  );
};

export default PDReview;
