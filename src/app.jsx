import React,{useState} from "react"
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

    const [cartItems, setCartItems] = useState([]);
    const onAdd = item => {
        const itemExist = cartItems?.find(product => product.id === item.id)
        if (itemExist) {
            setCartItems(
                cartItems.map(product => product.id === item.id ? {...itemExist, qty: itemExist.qty + item.qty} : product)
            )
        } else {
            setCartItems(prevItem =>[...prevItem, item])
        }
    }

    return (
        <Router>
            <React.Fragment>
                <NavBar cartItems={cartItems}/>
                <Switch>
                <Route exact path={["/","/home"]}>
                <Header />
                    <Main title="Women's Clothing" fetch="/women's clothing" />
                    <Main title="Jewelery" fetch="/jewelery" />
                    <Main title="Electronics" fetch="/electronics" />
                </Route>
                <Route exact path={["/category","/home/category"]} component={Category} />
                <Route exact path="/home/category/:category" component={Viewall}/>
                <Route path={`/category/:category/:id`}>
                    <ItemDetail location={`/category/:category/:id`} onAdd={onAdd}/>
                </Route>
                <Route path="/account" component={MyAccount} />
                <Route path="/cart">
                    <Cart cartItems={cartItems} />
                </Route>
                </Switch>
                <Footer />
            </React.Fragment>
        </Router>
    )
}

export default App;
