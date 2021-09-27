import React from "react"
import Header from "./components/Header/Header"
import NavBar from "./components/navbar/navbar"
import Main from "./components/main/Main"
import Viewall from "./components/main/Viewall"
import { BrowserRouter as Router, Route } from "react-router-dom"
const App = () =>{
    return (
        <Router>
            <React.Fragment>
                <NavBar />
                <Header />
                <Route exact path="/">
                    <Main title="Women's Clothing" fetch="/women's clothing" />
                    <Main title="Jewelery" fetch="/jewelery" />
                    <Main title="Electronics" fetch="/electronics" />
                </Route>
                <Route path="/category/:category" component={Viewall}/>
            </React.Fragment>
        </Router>
    )
}

export default App