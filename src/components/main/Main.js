import React, {useState, useEffect} from 'react'
import axios from 'axios'
import main from './Main.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Main = ({title, fetch}) => {

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
            <div key={product.id} className={main.productEntry}>
                <div className={main.image}>
                    <div className={main.hoverimage}>
                        <button>
                            
                        </button>
                    </div>
                    <img src={product.image} alt={product.title}/>
                </div>
                <p>${product.price}</p>
                <p>Here comes descriptions</p>
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
