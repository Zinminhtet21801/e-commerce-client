import React from "react";
import URLCrumb from "../BreadCrumbs/URLCrumb";

const MyAccount = (props) =>{
    console.log(props);
    const url = props.location.pathname
    return(
        <React.Fragment>
            <URLCrumb url={url}/>
        <h1>Account</h1>
        </React.Fragment>
    )
}

export default MyAccount