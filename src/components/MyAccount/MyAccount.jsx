import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import URLCrumb from "../BreadCrumbs/URLCrumb";
import AccountSegment from "./Segments/AccountSegment";
import classes from "./MyAccount.module.css";
import OrderHistorySegment from "./OrderHistorySegment";
import LeftDrawer from "./Drawer/Drawer";



const MyAccount = (props) => {
  const [urlLink, setUrlLink] = useState("/myAccount");
  const [urlShrink, setUrlShrink] = useState(false);

  const urlLinkHandler = (url) => {
    setUrlLink(url);
  };

  const urlShrinkHandler = (bool) => {
    setUrlShrink(bool);
  };

  return (
    <React.Fragment>
      <URLCrumb url={urlLink} />
      <div className={`${classes.container}`}>
        <h1
          className={classes.account_page_title}
          style={{ display: "inline" }}
        >
          Settings
        </h1>
        <div className={`row ${classes.row_account_page}`}>
          <div
            className={`col col-lg-3 col-md-12 col-sm-12 col-xs-12 ${classes.left_col}`}
          >
            <nav className={`navbar navbar-light navbar-expand-lg `}>
              <div className={`container-fluid`}>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  // onClick={()=> setUrlShrink(true)}
                >
                  <LeftDrawer
                    urlHandler={urlLinkHandler}
                    urlShrinkHandler={urlShrinkHandler}
                  />
                </button>
                {!urlShrink && (
                  <div className="collapse navbar-collapse" id="navbarContent">
                    <ul
                      className="navbar-nav  mb-2 mb-lg-0"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      <li
                        className="nav-item"
                        style={{ width: "50%", marginLeft: "40.5%" }}
                      >
                        <span
                          onClick={() => setUrlLink("/myAccount")}
                          className={`nav-link ${
                            urlLink.includes("myAccount") &&
                            classes.active_link
                          } ${classes.account_link}`}
                          style={{ color: "black" }}
                        >
                          My Account
                        </span>
                      </li>
                      <li
                        className="nav-item"
                        style={{ width: "50%", marginLeft: "40.5%" }}
                      >
                        <span
                          onClick={() => setUrlLink("/order history")}
                          className={`nav-link ${
                            urlLink.includes("order history") &&
                            classes.active_link
                          } ${classes.account_link}`}
                          style={{ color: "black" }}
                        >
                          Order History
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </nav>
          </div>
          <div
            className={`col-lg-9 col-md-12 col-sm-12 col-xs-12 ${classes.right_col}`}
          >
            <div
              className={`${
                urlLink.includes("myAccount") && classes.inner_container
              }`}
            >
              {urlLink.includes("myAccount") ? (
                <AccountSegment />
              ) : (
                <OrderHistorySegment />
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyAccount;
