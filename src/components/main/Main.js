import React, {useState, useEffect} from 'react'
import axios from 'axios'
import main from './Main.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

const Main = ({title, fetch}) => {
    const truncate = (str, n) => {
        console.log(str,str.length);
        return str?.length > n ? str.substr(0, n - 1) + '...' : str
    }

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
            <div key={product.id} className={`${main.productEntry} card`} style={{borderWidth : "0"}}>
                <div className={main.image}>
                    <div className={main.hoverimage}>
                        <button className={`${main["wishlist_btn"]}`}>
                        <FontAwesomeIcon icon={faHeart} className={`${main["fa_heart"]}`} />
                        </button>
                    </div>
                    <img src={product.image} alt={product.title}/>
                </div>
                
                <p className={main.price}>${product.price}</p>
                <div className={`${main["product_description"]}`}>
                <p>{truncate(product.title,80)}</p>
                {/* <p>{product.title}</p> */}
                </div>
            </div>
            
        )
    }

    return (
        <React.Fragment>
        <div className={main.wrapper}>
            <h3>{title}</h3>
            <Carousel responsive={responsive} draggable={false}>
                {products.map(productEntry)}
            </Carousel>
        </div>
        </React.Fragment>
    )
}

export default Main
