import React from "react";
import { useField } from "formik";
import { TextField } from "@material-ui/core";
import useStyles from "../../css/baForm";

export default function InputField(props) {
  const classes = useStyles();
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    if (meta.touched && meta.error) {
      console.log(meta.error);
      return meta.error;
    }
  }

  return (
    <TextField
      type="text"
      error={meta.touched && meta.error && true}
      className={classes.ba_textField}
      InputProps={{
        disableUnderline: true,
        classes: {
          input: classes.textFieldInput,
        },
      }}
      InputLabelProps={{
        classes: {
          formControl: classes.textFieldLabel,
        },
      }}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
    />
  );
}
