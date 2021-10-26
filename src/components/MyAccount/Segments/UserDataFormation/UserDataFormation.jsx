import { FormHelperText } from "@mui/material";
import { useEffect, useState } from "react";
import InputTextField from "../PasswordToggle/InputFieldText";
import classes from "./UserDataFormation.module.css";

// let errorTagName = ""

const UserDataFormation = ({
  user,
  isEdit,
  pwdToggleHandler,
  inputHandler,
}) => {
  const [isTouched, setIsTouched] = useState({
    currentPwd: false,
    newPwd: false,
    confirmPwd: false,
  });
  const [editUserData, setEditUserData] = useState({
    name: "",
    address: "",
    phone: "",
    currentPwd: "",
    newPwd: "",
    confirmPwd: "",
  });

  useEffect(()=>{
    !isEdit && setEditUserData({
      name: "",
      address: "",
      phone: "",
      currentPwd: "",
      newPwd: "",
      confirmPwd: "",
    })
  },[isEdit])

  // const [errorTagName, setErrorTagName] = useState("");

  const onFocusHandler = (key) => {
    setIsTouched((prevValue) => ({ ...prevValue, [key]: true }));
  };

  const inputChangeHandler = (key, data) => {
    setEditUserData((prevValue) => ({ ...prevValue, [key]: data }));
    inputHandler((prevValue) => ({ ...prevValue, [key]: data }));
  };

  let errorTagName = ""



  const showErrorText = () => {
    if (isTouched.currentPwd && isTouched.newPwd && isTouched.confirmPwd) {
      if (
        editUserData.currentPwd.length === 0 &&
        editUserData.newPwd.length !== 0 &&
        editUserData.confirmPwd.length !== 0
      ) {
        errorTagName = "current"
        return;
      } else if (
        editUserData.currentPwd.length !== 0 &&
        editUserData.newPwd.length === 0 &&
        editUserData.confirmPwd.length !== 0
      ) {
        errorTagName = "new"
        return ;
      } else if (
        editUserData.currentPwd.length !== 0 &&
        editUserData.newPwd.length !== 0 &&
        editUserData.confirmPwd.length === 0
      ) {
        errorTagName = "confirm"
        return;
      } else if (
        editUserData.newPwd.length !== 0 &&
        editUserData.confirmPwd.length !== 0
      ) {
        if (editUserData.newPwd !== editUserData.confirmPwd) {
          errorTagName = "doesNotMatch"
          return;
        }else if(editUserData.newPwd === editUserData.confirmPwd){
          errorTagName = ""
          return;
        }
      } else if (
        editUserData.newPwd.length === 0 &&
        editUserData.confirmPwd.length !== 0
      ) {
        errorTagName = "new"
        return;
      }else if (
        editUserData.newPwd.length !== 0 &&
        editUserData.confirmPwd.length === 0
      ) {
        errorTagName = "confirm"
        return;
      } else if (
        editUserData.currentPwd.length !== 0 &&
        editUserData.newPwd.length !== 0 &&
        editUserData.confirmPwd.length !== 0 &&
        editUserData.newPwd === editUserData.confirmPwd
      ) {
        errorTagName = ""
        return;
      }else if (
        editUserData.currentPwd.length === 0 &&
        editUserData.newPwd.length === 0 &&
        editUserData.confirmPwd.length === 0
      ) {
        errorTagName = ""
        return;
      }
    }
  };

  showErrorText();

  let userData = [];
  if (user) {
    for (const data in user) {
      let title = data.charAt(0).toUpperCase() + data.slice(1);
      userData.push(
        <div key={data}>
          <div className={classes.info_container}>
            {data !== "password" ? (
              <div>
                <span className={classes.title}>{title}</span>
                <div>
                  {isEdit && data !== "email" ? (
                    <InputTextField
                      data={user[data]}
                      title={data}
                      id={data}
                      onType={inputChangeHandler}
                      onFocus={onFocusHandler}
                    />
                  ) : (
                    <span className={classes.user_data}>{user[data]}</span>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <span>Change Password</span>
                {isEdit && (
                  <div>
                    <span className={classes.title}>Current Password</span>
                    <InputTextField
                      id="currentPwd"
                      title="password"
                      data="Enter Current Password."
                      pwdToggle={pwdToggleHandler}
                      onType={inputChangeHandler}
                      onFocus={onFocusHandler}
                    />
                    {/* <span style={{ display: "none" }}>{showErrorText()}</span> */}
                    {errorTagName.includes("current") && (
                      <FormHelperText id="component-error-text" color="red">
                        Please Enter Current Password
                      </FormHelperText>
                    )}
                    <span className={classes.title}>New Password</span>
                    <InputTextField
                      id="newPwd"
                      title="password"
                      data="Enter New Password."
                      pwdToggle={pwdToggleHandler}
                      onType={inputChangeHandler}
                      onFocus={onFocusHandler}
                    />
                    {/* <span style={{ display: "none" }}>{showErrorText()}</span> */}
                    {errorTagName.includes("new") ? (
                      <FormHelperText id="component-error-text" color="red">
                        Please Enter New Password
                      </FormHelperText>
                    ) : (
                      errorTagName.includes("doesNotMatch") && (
                        <FormHelperText id="component-error-text" color="red">
                          New Password and Confirm Password Doesnt Match!!!
                        </FormHelperText>
                      )
                    )}
                    <span className={classes.title}>Confirm New Password</span>
                    <InputTextField
                      id="confirmPwd"
                      title="password"
                      data="Enter New Password Again."
                      pwdToggle={pwdToggleHandler}
                      onType={inputChangeHandler}
                      onFocus={onFocusHandler}
                    />
                    {/* <span style={{ display: "none" }}>{showErrorText()}</span> */}
                    {errorTagName.includes("confirm") ? (
                      <FormHelperText id="component-error-text" color="red">
                        Please Enter Confirm Password
                      </FormHelperText>
                    ) : (
                      errorTagName.includes("doesNotMatch") && (
                        <FormHelperText id="component-error-text" color="red">
                          New Password and Confirm Password Doesnt Match!!!
                        </FormHelperText>
                      )
                    )}
                  </div>
                )}
              </div>
            )}
            <hr />
          </div>
        </div>
      );
    }
    return userData;
  }
  return { userData };
};
export default UserDataFormation;
