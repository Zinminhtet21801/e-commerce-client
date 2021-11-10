import SearchBox from "./search/SearchBox";
import classes from "./navbar.module.css";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import axios from "axios";
import ConfirmationDialog from "../PopUp/ConfirmationDialog";
import AccountNav from "./AccountNav/AccountNav";
import { useHistory } from "react-router-dom";

const NavBar = ({
  cartItems,
  getMessage,
  cookie,
  username,
  navUrl,
  clearItemsOnLogout,
  setNavUrl,
  setClearUsername,
}) => {
  console.log({ navUrl }, window.location.pathname);
  console.log(username)

  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  let qty = 0;
  cartItems.map((item) => (qty += item.qty));
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = async () => {
    await axios({
      url: "http://localhost:5000/logout",
      method: "get",
      withCredentials: true,
    }).then((res) => {
      console.log(res);
      getMessage(res.data);
    });
    handleClose();
    clearItemsOnLogout();
    setClearUsername(true);
    history.replace("/");
  };

  const toggleNavAccount = () => {
    if (window.location.pathname === "/") {
      return "Login";
    } else if (window.location.pathname === "/login" && !navUrl) {
      return "Sign Up";
    } else if (window.location.pathname === "/signup" && !navUrl) {
      return "Login";
    } else if (
      window.location.pathname === "/login" &&
      navUrl.includes("/signup")
    ) {
      return "Sign Up";
    } else if (
      window.location.pathname === "/signup" &&
      navUrl.includes("/login")
    ) {
      return "Login";
    } else if (
      window.location.pathname === "/login" &&
      navUrl.includes("/login")
    ) {
      return "Sign Up";
    } else if (
      window.location.pathname === "/signup" &&
      navUrl.includes("/signup")
    ) {
      return "Login";
    }
  };

  return (
    <nav
      className={`navbar navbar-light navbar-expand-lg ${classes["container_outer_nav"]}`}
    >
      <div className={`container-fluid ${classes["container_nav"]}`}>
        <div className={`${classes.logo}`}>
          <Link
            className={`${classes["logo_text"]}`}
            to="/"
            onClick={() => setNavUrl("")}
          >
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
              <SearchBox />
            </li>
            <li className={`nav-item dropdown ${classes["navbar_li"]}`}>
              <Link
                className={`nav-link position-relative ${classes.account_text}`}
                to="/cart"
              >
                <ShoppingCartIcon
                  sx={{ fontSize: 33 }}
                  className={classes.icon}
                />
                <span
                  className={`position-absolute top-0  translate-middle badge rounded-pill  ${classes["icon_text_bg"]}`}
                >
                  <span className="">{qty}</span>
                </span>
              </Link>
            </li>
            <li className={`nav-item dropdown ${classes["navbar_li"]}`}>
              {username || cookie ? (
                <AccountNav handleOpen={handleOpen} username={username} />
              ) : (
                <Link
                  to={
                    window.location.pathname === "/"
                      ? "/login"
                      : navUrl && navUrl.includes("/login")
                      ? "/signup"
                      : "/login"
                  }
                  className={`nav-link ${classes.account_text}`}
                  style={{ color: "#fff" }}
                  onClick={() =>
                    navUrl !== "" && navUrl.includes("/login")
                      ? setNavUrl("/signup")
                      : setNavUrl("/login")
                  }
                >
                  {toggleNavAccount()}
                </Link>
              )}
            </li>
            {open && (
              <ConfirmationDialog
                handleClose={handleClose}
                onOpen={open}
                logout={logout}
              />
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
