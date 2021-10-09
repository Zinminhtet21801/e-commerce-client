// import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./AccountSegment.module.css";

const userDataFormation = (user) => {
  let userData = [];
  if (user) {
    for (const data in user) {
      console.log(data);
      let title = data.charAt(0).toUpperCase() + data.slice(1);
      userData.push(
        <div>
          <div className={classes.info_container}>
            {data !== "password" ? (
              <div>
                <span>{title}</span>
                {data !== "email" && <span className={classes.edit_text}>edit</span>}
                  <div>
                    <span>{user[data]}</span>
                  </div>
              </div>
            ) : (
              <div>
                <span>Change Password</span>
                <span className={classes.edit_text}>edit</span>
              </div>
            )}
            <hr />
          </div>
        </div>
      );
    }
    return userData;
  }
};

const AccountSegment = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    const fetchUserData = async () => {
      await fetch(
        "https://react-http-fd38c-default-rtdb.firebaseio.com/user.json"
      )
        .then((response) => response.json())
        .then((data) =>
          setUser({
            name: data.Name,
            address: data.Address,
            phone: data.phone,
            email: data.emailAddress,
            password: data.password,
          })
        );
    };
    fetchUserData();
  }, []);
  console.log(user);
  return (
    <React.Fragment>
      <p className={`${classes["page_text"]}`}>Personal Information</p>
      <div className={`${classes["email_container"]}`}>
        {userDataFormation(user)}
      </div>
    </React.Fragment>
  );
};

export default AccountSegment;
