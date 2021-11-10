import { Grid, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import InputTextBox from "../Signup/InputTextBox";
import classes from "../Signup/Signup.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import axios from "axios";

const Login = ({ getMessage, setNavUrl }) => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const history = useHistory()

  const handleInputChange = (v) => {
    let key = Object.keys(v)[0];
    setInputs((prevValue) => ({ ...prevValue, [key]: v[key] }));
  };

  const login = async() => {
    const username = inputs.username,
    password = inputs.password;
    await axios({
      method: "POST",
      url: "http://localhost:5000/login",
      data: {
        username,
        password,
        rememberMe
      },
      withCredentials: true,
      
    }).then((res) => {
      getMessage(res.data, true)
      const splittedMsg = res.data && res.data.split("|");
      splittedMsg && splittedMsg[0].includes("success") ? history.replace("/") : history.replace("/login")
    });
  };

  console.log(document.cookie);

  return (
    <React.Fragment>
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
            id={classes.rightPanel}
          >
            <Grid container item xs={12} sm={6} direction="column">
              <h2 className={classes.signup}>Login</h2>
              <InputTextBox
                type="email"
                label="Gmail"
                // inputName="gmail"
                inputName="username"
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
                <FormControlLabel
                  control={<Checkbox onClick={()=> setRememberMe((prevBool) => !prevBool)} value={rememberMe} />}
                  label="Remember me"
                  name="remember"
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} className={classes.buttons}>
              <button
                className={classes.buttons__login}
                onClick={login}
                disabled={(inputs.username && inputs.password ) ? false : true }
              >
                Login
              </button>
              <h6 className={classes.accountDontExist}>
                Don't have an account yet?{" "}
                <Link to="/signup" onClick={()=> setNavUrl("/signup")}>Create account</Link>
              </h6>
            </Grid>
            <Grid item xs={12} className={classes.social_login__buttons}>
              <h5>Or login with </h5>
              <FacebookIcon style={{ color: "#1778F2", fontSize: "33px" }} />
            </Grid>
          </Grid>
        </Grid>
    </React.Fragment>
  );
};

export default Login;