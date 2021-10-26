import React, { useState } from "react";
import classes from "./Signup.module.css";
import Input from "@mui/material/Input";
import { IconButton, InputAdornment } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import FormHelperText from '@mui/material/FormHelperText'

const InputTextBox = ({
  type,
  label,
  inputName,
  handleInputChange,
  className,
}) => {
  const [toggleShowPassword, setToggleShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setToggleShowPassword((prevBool) => !prevBool);
  };
  return (
    <React.Fragment>
      <div
        className={
          className === "login" ? classes.login__inputs : classes.inputs
        }
      >
        <h6 className={classes.labels}>{label}</h6>
        {label === "Address" ? (
          <Input type={type} name={inputName} rows={2} multiline />
        ) : inputName === "password" ? (
          <Input
            type={toggleShowPassword ? 'text' : 'password'}
            name={inputName}
            required={true}
            onChange={(e) => {
              handleInputChange({ [e.target.name]: e.target.value });
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {toggleShowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <Input
            type={type}
            name={inputName}
            required={true}
            onChange={(e) => {
              handleInputChange({ [e.target.name]: e.target.value });
            }}
          />
        )}
        {/* <FormHelperText error>Please enter {label}</FormHelperText> */}
      </div>
    </React.Fragment>
  );
};

export default InputTextBox;
