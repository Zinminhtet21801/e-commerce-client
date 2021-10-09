import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import classes from "./URLCrumb.module.css";
import { Link } from "react-router-dom";

const URLCrumb = (props) => {
  const url = props.url;
  const separatedURL = url.split("/")
  separatedURL[0] = "home"
  let urlArray = [];
  const breadcrumbs = separatedURL.map((data, index) => {
    urlArray.push(`${separatedURL[index]}`);
    return index !== separatedURL.length - 1 ? (
      <Link
        to={`/${urlArray.join("/")}`}
        underline="hover"
        key={separatedURL.indexOf(data.id)}
        color="inherit"
        style={{ fontSize: "0.8rem" }}
        className={`${classes["crumbs_link"]}`}
      >
        {data}
      </Link>
    ) : (
      <Typography
        key={separatedURL.indexOf(data.id)}
        color="#fff"
        fontWeight="500"
        style={{ fontSize: "0.9rem" }}
      >
        {data}
      </Typography>
    );
  });

  return (
    <React.Fragment>
      <Stack spacing={2} className={classes.breadcrumbs}>
        <Breadcrumbs separator="›">{breadcrumbs}</Breadcrumbs>
      </Stack>
    </React.Fragment>
  );
};

export default URLCrumb;
