import SearchBox from "./search/SearchBox";
import classes from "./navbar.module.css";
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const NavBar = ({cartItems}) => {
  let qty = 0;
  cartItems.map(item => qty+=item.qty)
  return (
    <nav className={`navbar navbar-light navbar-expand-lg ${classes["container_outer_nav"]}`}>
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
              {/* <div className={`${classes.middleNav}`}> */}
                <SearchBox />
              {/* </div> */}
            </li>
            <li className={`nav-item dropdown ${classes["navbar_li"]}`}>
            <Link
                  className={`nav-link position-relative ${classes.account_text}`}
                  to="/cart"
                >
                  <ShoppingCartIcon sx={{fontSize: 33}} className={classes.icon}/>
                  <span
                    className={`position-absolute top-0  translate-middle badge rounded-pill  ${classes["icon_text_bg"]}`}
                  >
                    <span className="">{qty}</span>
                  </span>
                  </Link>
            </li>
            <li className={`nav-item dropdown ${classes["navbar_li"]}`}>
            <Link
                  to="/my account"
                  className={`nav-link ${classes.account_text}`}
                  color="#fff"
                >
                  My Account
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(NavBar);
