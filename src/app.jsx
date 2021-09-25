import React from "react"
import Header from "./components/Header/Header"
import NavBar from "./components/navbar/navbar"
import Main from "./components/main/Main"
const App = () =>{
    return (
        <React.Fragment>
            <NavBar />
            <Header />
            <Main title="Women's Clothing" fetch="/women's clothing" />
            <Main title="Jewelery" fetch="/jewelery" />
            <Main title="Electronics" fetch="/electronics" />
        </React.Fragment>
    )
}

export default App