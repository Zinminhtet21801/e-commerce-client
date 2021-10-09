import React from "react"
import classes from "./Footer.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = props =>{
    return (
        <React.Fragment>
            <div className={classes.footer}>
            <div className={classes["footer_link"]}>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FacebookIcon sx={{ fontSize: 33 }} className={classes.font_link}/></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><InstagramIcon sx={{ fontSize: 33 }} className={classes.font_link}/></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><TwitterIcon sx={{ fontSize: 33 }} className={classes.font_link}/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><LinkedInIcon sx={{ fontSize: 33 }} className={classes.font_link}/></a>
            </div>
            <p className={classes.copyright}>Copyright &copy; 2021 DieHardCoder. All Rights Reserved</p>
            </div>
        </React.Fragment>
    )
}

export default Footer