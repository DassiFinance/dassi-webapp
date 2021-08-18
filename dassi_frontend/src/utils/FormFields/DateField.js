import React from "react";
import { useField } from "formik";
import { TextField } from "@material-ui/core";

export default function DateField(props) {
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
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
    />
  );
}
