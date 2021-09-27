import SearchBox from "./search/SearchBox";
import classes from "./navbar.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className={`container-fluid ${classes["container_nav"]}`}>
        <div className={`${classes.logo}`}>
          <Link className={`${classes["logo_text"]}`} to="/">
            E-Commerce
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${classes.collapse}`}
          id="navbarSupportedContent"
        >
          <ul
            className={`navbar-nav me-auto ms-auto mb-2 mb-lg-0 ${classes["navbar_ul"]}`}
          >
            <li className={`nav-item dropdown ${classes["navbar_li"]}`}>
              <div className={`${classes.middleNav}`}>
                <SearchBox />
                <Link
                  className={`nav-link position-relative ${classes.account_text}`}
                  to="/cart"
                >
                  {/* <i class="fas fa-shopping-cart"></i> */}
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className={classes.icon}
                  />
                  <span
                    className={`position-absolute top-0  translate-middle badge rounded-pill  ${classes["icon_text_bg"]}`}
                  >
                    <span className="">10</span>
                  </span>
                  </Link>
                <Link
                  to="/account"
                  className={`nav-link ${classes.account_text}`}
                  id="navbarDropdown"
                  role="button"
                  // data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Account
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(NavBar);
