import {
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputTextBox from "../Signup/InputTextBox";
import classes from "../Signup/Signup.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';

const Login = () => {
  const [inputs, setInputs] = useState();
  const handleInputChange = (v) => {
    let key = Object.keys(v)[0];
    setInputs((prevValue) => ({ ...prevValue, [key]: v }));
  };

  return (
    <React.Fragment>
      <form method="POST" action="http://localhost:5000/signup">
        <Grid container>
          <Grid
            container
            item
            xs={12}
            md={6}
            justifyContent="center"
            id={classes.leftPanel}
          >
            <img
              src="https://res.cloudinary.com/haw010/image/upload/v1633616333/shopping-cart_yrvc2f.png"
              alt="shopping-cart"
              className={classes.image}
              draggable="false"
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={6}
            columnSpacing="2"
            className={classes.rightPanel}
          >
            <Grid container item xs={12} sm={6} direction="column">
              <h2 className={classes.signup}>Login</h2>
              <InputTextBox
                type="email"
                label="Gmail"
                inputName="gmail"
                handleInputChange={handleInputChange}
                className={"login"}
              />
              <InputTextBox
                type="password"
                label="Password"
                inputName="password"
                className={"login"}
                handleInputChange={handleInputChange}
              />
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Remember me" />
              </FormGroup>
            </Grid>
            <Grid item xs={12} className={classes.buttons}>
              <button className={classes.buttons__login} type="submit">
                Login
              </button>
              <h6 className={classes.accountDontExist}>
                Don't have an account yet?{" "}
                <Link to="/sign up">Create account</Link>
              </h6>
            </Grid>
            <Grid item xs={12} className={classes.social_login__buttons}>
              <h5>Or login with </h5>
              <FacebookIcon style={{color : "#1778F2", fontSize : "33px"}} />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default Login;
