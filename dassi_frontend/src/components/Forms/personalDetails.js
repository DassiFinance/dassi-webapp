import React, { useState } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import InputField from "../../utils/FormFields/InputField";
import SelectField from "../../utils/FormFields/SelectField";
import useStyles from "../../css/baForm";

const IdProof = [
  {
    value: "Aadhar Card",
    label: "Aadhar Card",
  },
  {
    value: "Passport",
    label: "Passport",
  },
  {
    value: "Voter Id",
    label: "Voter Id",
  },
  {
    value: "Driving License",
    label: "Driving License",
  },
];

export default function PersonalDetails(props) {
  const {
    formField: {
      fullName,
      zipcode,
      bio,
      income,
      occupation,
      idNumber,
      idDoc,
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
            <InputField name={fullName.name} label={fullName.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={zipcode.name} label={zipcode.label} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <InputField
              multiline
              rows={12}
              name={bio.name}
              label={bio.label}
              placeholder="Tell potential lenders about yourself..."
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
          <Grid item xs={12} className={classes.splitInputFieldGrid}>
            <Grid item xs={8}>
              <InputField
                name={idNumber.name}
                label={idNumber.label}
                fullWidth
                placeholder="Enter ID Number"
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    input: classes.splitInputField,
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <SelectField
                name={idDoc.name}
                label={idDoc.label}
                data={IdProof}
                fullWidth
              />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <img src={preview} className={classes.imageDiv} alt="" />
          </Grid>
          <Grid item xs={12}>
            <input
              name={imgURL.name}
              type="file"
              label={imgURL.label}
              onChange={(e) => {
                // console.log(e.target.files);
                const fileReader = new FileReader();
                fileReader.onload = () => {
                  if (fileReader.readyState === 2) {
                    // console.log(fileReader.result);
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
