import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import axios from 'axios'
import classes from './Viewall.module.css'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
}


const Viewall = () => {
    const [products, setProducts] = useState([])
    const url = useParams()
    const { category } = url
    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(`err in getting viewall -> ${err}`))
    },[category])



    const productEntry = (product) => {
        return (
            <Link to={`/category/${product.category}/${product.id}`} className={`${classes["category_link"]}`}>
                <div key={product.id} className={`${classes.productEntry}`} style={{borderWidth : "0"}}>
                <div className={classes.image}>
                    <div className={classes.hoverimage}>
                        <button className={`${classes["wishlist_btn"]}`}>
                            <FontAwesomeIcon icon={faHeart} className={`${classes["fa_heart"]}`} />
                        </button>
                    </div>
                    <img src={product.image} alt={product.title}/>
                </div>
                <p className={classes.price}>${product.price}</p>
                <div className={`${classes["product_description"]}`}>
                    <p>{truncate(product.title,80)}</p>
                </div>
            </div>
            </Link>
        )
    }
    return (
        <React.Fragment>
            <div className={`${classes.buttons}`}>
                <button className={`btn btn-outline-primary`}>Filter</button>
                <button className={`btn btn-outline-primary`}>Sort</button>
            </div>
            <div className={classes.products}>
                {products.map(productEntry)}
            </div>
        </React.Fragment>
    )
}

export default Viewall
