import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/navbar/navbar";
import Main from "./components/main/Main";
import Viewall from "./components/main/Viewall";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyAccount from "./components/MyAccount/MyAccount";
import Cart from "./components/Cart/Cart";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Footer from "./components/Footer/Footer";
import Category from "./components/Category/Category";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import SnackbarComponent from "./components/Snackbar/SnackbarComponent";
import axios from "axios";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState(() => "");
  const [url, setUrl] = useState("");
  const [cookieExists, setCookieExists] = useState(()=> document.cookie ? document.cookie : false);
  useEffect(() => {
    const getUsername = async () => {
      console.log("UISer");
      const cookie = getCookie("rememberMe");
      await axios({
        method: "get",
        url: `http://localhost:5000/users/cookie/${cookie}`,
        withCredentials: true,
      }).then(
        (res) =>
          {
          return res.data &&
          username !== res.data.name &&
          (setUsername(res.data.name), setCookieExists(true))
          }
      );
    };

    const getSessionID = async () => {
      console.log("SESSION");
      await axios({
        method: "get",
        url: "http://localhost:5000/users/session",
        withCredentials: true,
      }).then(
        (res) =>
          {
            console.log(res.data);
          return res.data &&
          username !== res.data.name &&
          (setUsername(res.data.name), setCookieExists(true))
          }
      );
    };
    setCookieExists(getCookie("rememberMe") ? true : false);

    cookieExists ? getUsername() : getSessionID();

  }, [cookieExists, username]);

  const clearItemsOnLogout = () => {
    setCartItems([]);
  };

  const getMessage = (msg, bool) => {
    bool ? setCookieExists(true) : setCookieExists(false);
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const onClearUsername = (bool) => {
    bool && setUsername("");
  };

  const setNavUrl = (incomingURL) => {
    setUrl(incomingURL);
  };

  const onAdd = (item) => {
    const itemExist = cartItems?.find((product) => product.id === item.id);
    if (itemExist) {
      setCartItems(
        cartItems.map((product) =>
          product.id === item.id
            ? { ...itemExist, qty: itemExist.qty + item.qty }
            : product
        )
      );
    } else {
      setCartItems((prevItem) => [...prevItem, item]);
    }
  };

  return (
    <Router>
      <React.Fragment>
        <NavBar
          cartItems={cartItems}
          getMessage={getMessage}
          cookie={cookieExists}
          username={username}
          navUrl={url}
          clearItemsOnLogout={clearItemsOnLogout}
          setNavUrl={setNavUrl}
          setClearUsername={onClearUsername}
        />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Header />
            <Main title="Women's Clothing" fetch="/women's clothing" />
            <Main title="Jewelery" fetch="/jewelery" />
            <Main title="Electronics" fetch="/electronics" />
          </Route>
          <Route
            exact
            path={["/category", "/home/category"]}
            component={Category}
          />
          <Route exact path="/home/category/:category" component={Viewall} />
          <Route path={`/category/:category/:id`}>
            <ItemDetail location={`/category/:category/:id`} onAdd={onAdd} />
          </Route>
          <Route path="/myAccount" >
            <MyAccount getMessage={getMessage} />
          </Route>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          <Route path={"/signup"}>
            <Signup getMessage={getMessage} setNavUrl={setNavUrl} />
          </Route>
          <Route path={"/login"}>
            <Login getMessage={getMessage} setNavUrl={setNavUrl} />
          </Route>
        </Switch>
        <SnackbarComponent message={message} />
        <Footer />
      </React.Fragment>
    </Router>
  );
};

export default App;
