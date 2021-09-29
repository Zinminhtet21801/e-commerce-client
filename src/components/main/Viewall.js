import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import axios from 'axios'
import classes from './Viewall.module.css'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Pagination } from '@mui/material'


const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
}

const Viewall = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOffirstProduct = indexOfLastProduct - productsPerPage
    const url = useParams()
    const { category } = url
    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => console.log(`err in getting viewall -> ${err}`))
    },[category])

    // Pagination
    const handlePaginationChange = (e, value) => {
        setCurrentPage(value)
    }

    const productEntry = (product) => {
        return (
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
        )
    }
    return (
        <React.Fragment>
            <div className={`${classes.buttons}`}>
                <button className={`btn btn-outline-primary`}>Filter</button>
                <button className={`btn btn-outline-primary`}>Sort</button>
            </div>
            <div className={classes.products}>
                {products.slice(indexOffirstProduct, indexOfLastProduct).map(productEntry)}
            </div>
            <Pagination count={Math.ceil(products.length/productsPerPage)} page={currentPage} onChange={handlePaginationChange} color="primary" style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}/>
        </React.Fragment>
    )
}

export default Viewall
