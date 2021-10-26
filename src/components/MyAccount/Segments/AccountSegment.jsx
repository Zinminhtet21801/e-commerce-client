import React, { useEffect, useState } from "react";
import classes from "./AccountSegment.module.css";
import EditIcon from "@mui/icons-material/Edit";
import InputTextField from "./PasswordToggle/InputFieldText";
import UserDataFormation from "./UserDataFormation/UserDataFormation";
import { Link } from "react-router-dom";

const AccountSegment = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [pwdToggle, setPwdToggle] = useState(false);
  const [editUserData, setEditUserData] = useState({
    name: "",
    address: "",
    phone: "",
    currentPwd: "",
    newPwd: "",
    confirmPwd: "",
  });
  const [user, setUser] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  });
  const [clearAllEditInput, setClearAllEditInput] = useState("");
  useEffect(() => {
    const fetchUserData = async () => {
      await fetch(
        "https://react-http-fd38c-default-rtdb.firebaseio.com/user.json"
      )
        .then((response) => response.json())
        .then((data) =>
          setUser({
            name: data.name,
            address: data.address,
            phone: data.phone,
            email: data.email,
            password: data.password,
          })
        );
    };
    fetchUserData();
  }, []);

  const pwdToggleHandler = (bool) => {
    setPwdToggle(bool);
  };

  const inputChangeHandler = (data) => {
    setEditUserData(data);
  };


  return (
    <React.Fragment>
      <div className={classes.outer_container}>
        <div className={classes.title_wrapper}>
          <span className={`${classes["page_text"]}`}>
            Personal Information
          </span>
          <span className={classes.edit_text} onClick={() => setIsEdit(true)}>
            <EditIcon /> edit
          </span>
        </div>
        <div className={`${classes["email_container"]}`}>
          {
            <UserDataFormation
              user={user}
              isEdit={isEdit}
              pwdToggleHandler={pwdToggleHandler}
              inputHandler={inputChangeHandler}
            />
          }
        </div>
        {isEdit ? <div className={`${classes["btn_container"]}`}>
          <button className={`btn btn-primary`}>Save</button>
          <button
            className={`btn btn-primary`}
            onClick={() =>setIsEdit(false)}
          >
            Cancel
          </button>
        </div> : <button
            className={`btn btn-primary`}
            onClick={(e) => {
              e.preventDefault()
              window.location.href="http://localhost:3000/"
            }}
          >
            Go Back
          </button>}
      </div>
    </React.Fragment>
  );
};

export default AccountSegment;
