import React, { useState } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import InputField from "../../utils/FormFields/InputField";
import useStyles from "../../css/baForm";

export default function PersonalDetails(props) {
  const {
    formField: {
      firstName,
      lastName,
      email,
      zipcode,
      occupation,
      bio,
      income,
      imgURL,
    },
    setFieldValue,
  } = props;
  const classes = useStyles();
  const [preview, setPreview] = useState("");
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.subHeader}>
        Personal Details
      </Typography>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              name={firstName.name}
              label={firstName.label}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={zipcode.name} label={zipcode.label} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <InputField
              multiline
              rows={4}
              name={bio.name}
              label={bio.label}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={income.name} label={income.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name={occupation.name}
              label={occupation.label}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <img src={preview} />
          </Grid>
          <Grid item xs={12}>
            <input
              name={imgURL.name}
              type="file"
              label={imgURL.label}
              onChange={(e) => {
                console.log(e.target.files);
                const fileReader = new FileReader();
                fileReader.onload = () => {
                  if (fileReader.readyState === 2) {
                    console.log(fileReader.result);
                    setPreview(fileReader.result);
                    setFieldValue("imgURL", e.target.files[0]);
                  }
                };
                fileReader.readAsDataURL(e.target.files[0]);
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
