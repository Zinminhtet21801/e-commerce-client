import React from "react"
import classes from "./Header.module.css"
import headerImg from "./pngfind.com-school-supplies-png-1091553.png"
const Header = () =>{
    return(
        <React.Fragment>
            <div className={`${classes.container}`}>
            <div className={`${classes["left_container"]}`}>
            <div className={`${classes["left_container_text"]}`}>
            <p className={`${classes["title_text"]}`}>College stock-up</p>
            <div className={`${classes["header_text_container"]}`}>
            <p className={`${classes["header_text"]}`}>College stock-up College stock-up College stock-up </p>
            </div>
            <button className={`btn btn-dark`}>Shop Now</button>
            </div>
            </div>
            <div className={`${classes["right_container"]}`}>
            <div className={`${classes["right_container_img"]}`}>
                <img src={headerImg} alt="img" />             
            </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Header