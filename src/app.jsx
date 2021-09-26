import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/navbar/navbar";
import Main from "./components/main/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom";
import Viewall from "./components/main/Viewall";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/">
          <Header />
            <Main title="Women's Clothing" fetch="/women's clothing" />
            <Main title="Jewelery" fetch="/jewelery" />
            <Main title="Electronics" fetch="/electronics" />
          </Route>
          <Route path="/category" component={Viewall} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
