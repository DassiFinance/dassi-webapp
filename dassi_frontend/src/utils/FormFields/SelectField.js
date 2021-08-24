import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import useStyles from "../../css/baForm";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

function SelectField(props) {
  const classes = useStyles();
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;

  const isError = meta.touched && meta.error && true;
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{meta.error}</FormHelperText>;
    }
  }

  return (
    <FormControl {...rest} error={isError}>
      <InputLabel
        classes={{
          formControl: classes.textFieldLabel,
        }}
      >
        {label}
      </InputLabel>
      <Select
        {...field}
        value={selectedValue ? selectedValue : ""}
        disableUnderline
        classes={{
          select: classes.textFieldInput,
        }}
      >
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {_renderHelperText()}
    </FormControl>
  );
}

SelectField.defaultProps = {
  data: [],
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SelectField;
