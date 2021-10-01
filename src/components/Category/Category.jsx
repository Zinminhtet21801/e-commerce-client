import React from "react"
import URLCrumb from "../BreadCrumbs/URLCrumb"

const Category = (props) =>{
    return(
        <React.Fragment>
        <URLCrumb url={(props.location.pathname).split("/").splice(1).join("/")} />
                <h1>Category</h1>
        </React.Fragment>
    )
}
export default Category