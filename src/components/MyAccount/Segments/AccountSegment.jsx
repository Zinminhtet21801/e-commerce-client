import React, { useEffect, useState } from "react";
import classes from "./AccountSegment.module.css";
import EditIcon from "@mui/icons-material/Edit";
import InputTextField from "./PasswordToggle/InputFieldText";
import UserDataFormation from "./UserDataFormation/UserDataFormation";
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";

const AccountSegment = ({ getMessage }) => {
  const [ id, setId ] = useState(); 
  const [isEdit, setIsEdit] = useState(false);
  const [pwdToggle, setPwdToggle] = useState(false);
  const [editUserData, setEditUserData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
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
  const history = useHistory();
  useEffect(() => {
    const getSessionID = async () => {
      await axios({
        method: "get",
        url: "http://localhost:5000/users/session",
        withCredentials: true,
      }).then(
        (res) => {
          setId(res.data._id);
          return res.data &&
            setUser({
              name: res.data.name,
              address: res.data.address,
              phone: res.data.phone,
              email: res.data.gmail,
              password: ""
            })
          }
      );
    };
    getSessionID();
  }, []);

  
  const pwdToggleHandler = (bool) => {
    setPwdToggle(bool);
  };
  
  const inputChangeHandler = (data) => {
    setEditUserData(data);
  };
  
  const editUserdata = async () => {
    await axios({
      method: "PATCH",
      url: `http://localhost:5000/update/user/${id}`,
      data: {
        name: editUserData.name,
        address: editUserData.address,
        phone: editUserData.phone,
        email: editUserData.email,
        currentPwd: editUserData.currentPwd,
        newPwd: editUserData.newPwd,
        comfirmPwd: editUserData.comfirmPwd
      }
    }).then((res) => {
      getMessage(res.data, true)
      const splittedMsg = res.data && res.data.split("|");
      splittedMsg && splittedMsg[0].includes("success") ? history.replace("/") : history.replace("/myAccount")
    })
  }

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
          <button className={`btn btn-primary`} onClick={editUserdata}>Save</button>
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
