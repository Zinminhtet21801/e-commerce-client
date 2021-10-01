import React from "react"
import Header from "./components/Header/Header"
import NavBar from "./components/navbar/navbar"
import Main from "./components/main/Main"
import Viewall from "./components/main/Viewall"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MyAccount from "./components/MyAccount/MyAccount"
import Cart from "./components/Cart/Cart"
import ItemDetail from "./components/ItemDetail/ItemDetail"
import Footer from "./components/Footer/Footer"
import Category from "./components/Category/Category"
const App = () =>{
    return (
        <Router>
            <React.Fragment>
                <NavBar />
                <Switch>
                <Route exact path={["/","/home"]}>
                <Header />
                    <Main title="Women's Clothing" fetch="/women's clothing" />
                    <Main title="Jewelery" fetch="/jewelery" />
                    <Main title="Electronics" fetch="/electronics" />
                </Route>
                <Route exact path={["/category","/home/category"]} component={Category} />
                <Route exact path="/home/category/:category" component={Viewall}/>
                <Route path={`/category/:category/:id`} component={ItemDetail} />
                <Route path="/account" component={MyAccount} />
                <Route path="/cart" component={Cart} />
                </Switch>
                <Footer />
            </React.Fragment>
        </Router>
    )
}

export default App;
