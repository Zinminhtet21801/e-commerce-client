import React from "react"
import URLCrumb from "../BreadCrumbs/URLCrumb"
import CartGrid from "./CartGrid"

const Cart = ({cartItems}) =>{
    return(
        <React.Fragment>
        <URLCrumb url='/cart'/>
            {cartItems.length === 0 ? <h2 style={{ textAlign: 'center', margin: '1.5rem'}}>No items in Cart</h2> : <CartGrid cartItems={cartItems} />}
        </React.Fragment>
    )
}

export default Cart