import React from "react"
import URLCrumb from "../BreadCrumbs/URLCrumb"

const Cart = (props) =>{
    let url = props.location.pathname
    return(
        <React.Fragment>
        <URLCrumb url={url} />
            <h1>Cart</h1>
        </React.Fragment>
    )
}

export default Cart