import React from "react"
import classes from "./Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons' 

const Footer = props =>{
    return (
        <React.Fragment>
            <div className={classes.footer}>
            <div className={classes["footer_link"]}>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookSquare} className={classes["font_link"]} /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagramSquare} className={classes["font_link"]} /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitterSquare} className={classes["font_link"]} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className={classes["font_link"]} /></a>
            </div>
            <p className={classes.copyright}>Copyright &copy; 2021 DieHardCoder. All Rights Reserved</p>
            </div>
        </React.Fragment>
    )
}

export default Footer