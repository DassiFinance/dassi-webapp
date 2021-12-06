import React from "react";
import { useField } from "formik";
import { TextField } from "@material-ui/core";
import useStyles from "../../css/baForm";

export default function DateField(props) {
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
      type="date"
      className={classes.ba_textField}
      InputProps={{
        disableUnderline: true,
        classes: {
          input: classes.textFieldInput,
        },
      }}
      InputLabelProps={{
        classes: {
          root: classes.textFieldLabel,
        },
      }}
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
    />
  );
}
