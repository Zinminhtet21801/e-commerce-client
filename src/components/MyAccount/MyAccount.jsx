import axios from "axios";
import React, { useEffect, useState } from "react";
import URLCrumb from "../BreadCrumbs/URLCrumb";
import AccountSegment from "./AccountSegment";
import classes from "./MyAccount.module.css"
const MyAccount = (props) =>{
    const [user, setUser] = useState({name : {firstname : "", lastname : ""},address : "", phone : "", email : "", password : ""})
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/users").then(data=> setUser(data.data[Math.floor(Math.random() * (10 - 1 + 1) + 1)]))
    },[])
    console.log(user);
    const url = props.location.pathname
    return(
        <React.Fragment>
            <URLCrumb url={url}/>
        <div className={`${classes.container}`}>
        <p className={`${classes["page_text"]}`}>Personal Information</p>
        <div className={`${classes["inner_container"]}`}>
        <AccountSegment segmentTitle={"Name"} name={`${user?.name.firstname} ${user?.name.lastname}`} edit={true} />
        <AccountSegment segmentTitle={"Email Address"} name={user?.email} edit={false}/>
        <AccountSegment segmentTitle={"Password"} name={user?.password} edit={true}/>
        <AccountSegment segmentTitle={"Shipping Address"} name={`No. ${user?.address.number}, ${user?.address.street}, ${user?.address.city}`} edit={true}/>
        <AccountSegment segmentTitle={"Phone"} noHr={true} name={user?.phone}edit={true}/>
        <div className={`${classes["btn_container"]}`}>
        <button className={`btn btn-primary`}>Cancel</button>
        <button className={`btn btn-primary`}>Save</button>
        </div>
        </div>
        </div>
        </React.Fragment>
    )
}

export default MyAccount