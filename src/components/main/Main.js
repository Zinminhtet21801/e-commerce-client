import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import main from './Main.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
}

const Main =  ({title, fetch}) => {


    const baseUrl = 'https://fakestoreapi.com/products/category'
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios
            .get(`${baseUrl}${fetch}`)
            .then(response => setProducts(response.data))
            .catch(err => console.log(`error at getting store api -> ${err}`))
    },[fetch])

    const productEntry = (product) => {
        return (
            <Link to={`/category${fetch}/${product.id}`} key={product.id} style={{textDecoration : "none"}}>
                <div key={product.id} className={`${main.productEntry} card`} style={{borderWidth : "0"}}>
                <div className={main.image}>
                    <div className={main.hoverimage}>
                        <button className={`${main["wishlist_btn"]}`}>
                            <FavoriteIcon sx={{ fontSize: 40 }} className={`${main["fa_heart"]}`} />
                        </button>
                    </div>
                    <img src={product.image} alt={product.title}/>
                </div>
                
                <p className={main.price}>${product.price}</p>
                <div className={`${main["product_description"]}`}>
                <p>{truncate(product.title,80)}</p>
                </div>
            </div>
            </Link>
        )
    }

    return (
        <React.Fragment>
        <div className={main.wrapper}>
            <h3>{title}</h3>
            <Link to={`/home/category${fetch}`} className={`${main.viewall}`}>View All</Link>
            <Carousel responsive={responsive} draggable={false}>
                {products.map(productEntry)}
            </Carousel>
        </div>
        </React.Fragment>
    )
}

export default Main
