import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import URLCrumb from "../BreadCrumbs/URLCrumb";
import AccountSegment from "./Segments/AccountSegment";
import classes from "./MyAccount.module.css";
import OrderHistorySegment from "./Segments/OrderHistorySegment";

const MyAccount = (props) => {
  const [urlLink, setUrlLink] = useState("/my account");
  return (
    <React.Fragment>
      <URLCrumb url={urlLink} />
      <div className={`${classes.container}`}>
        <h1 className={classes.account_page_title}>Settings</h1>
        <div className={`row ${classes.row_account_page}`}>
          <div
            className={`col col-lg-3 col-md-12 col-sm-12 col-xs-12 ${classes.left_col}`}
          >
            <nav className={`navbar navbar-light navbar-expand-lg `}>
              <div className={`container-fluid`}>
                <button
                  className={`navbar-toggler ${classes.account_page_collapse_btn}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNavbar"
                >
                  <span
                    className={`navbar-toggler-icon`}
                    style={{ backgroundColor: "darkblue" }}
                  ></span>
                </button>
                <div className="collapse navbar-collapse" id="collapseNavbar">
                  <ul className={` navbar-nav  ${classes.left_title}`}>
                    <li className={`nav-item ${classes.left_li}`}>
                      <span
                        onClick={() => setUrlLink("/my account")}
                        className={`nav-link ${
                          urlLink.includes("my account") && classes.active_link
                        } ${classes.account_link}`}
                      >
                        My Account
                      </span>
                    </li>
                    <li className={`nav-item ${classes.left_li}`}>
                      <span
                        onClick={() => setUrlLink("/order history")}
                        className={`nav-link ${
                          urlLink.includes("order history") &&
                          classes.active_link
                        }  ${classes.account_link}`}
                        id="spanner"
                      >
                        Order History
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div
            className={`col-lg-9 col-md-12 col-sm-12 col-xs-12 ${classes.right_col}`}
          >
            <div className={`${classes["inner_container"]}`}>
              {urlLink.includes("my account") ? (
                <div>
                  <AccountSegment />
                </div>
              ) : (
                <OrderHistorySegment />
              )}
              <div className={`${classes["btn_container"]}`}>
                <button className={`btn btn-primary`}>Save</button>
                <button className={`btn btn-primary`}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyAccount;
