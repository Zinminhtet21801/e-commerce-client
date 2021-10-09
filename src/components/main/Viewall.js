import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import axios from 'axios'
import classes from './Viewall.module.css'
import { MenuItem, InputLabel} from '@mui/material/';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Pagination, Select } from '@mui/material'
import { Link } from 'react-router-dom';
import URLCrumb from '../BreadCrumbs/URLCrumb';

const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
}

const Viewall = (props) => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);
    const [sort, setSort ] = useState('none');

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

    // Select 
    const handleSelectChange = e => {
        setSort(e.target.value)
    }

    const productEntry = (product) => {
        return (
            <Link to={`/category/${product.category}/${product.id}`} className={`${classes["category_link"]}`}  key={product.id} >
                <div className={`${classes.productEntry}`} style={{borderWidth : "0"}}>
                <div className={classes.image}>
                    <div className={classes.hoverimage}>
                        <button className={`${classes["wishlist_btn"]}`}>
                            <FavoriteIcon sx={{ fontSize: 40 }} className={`${classes["fa_heart"]}`} />
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
        <URLCrumb url={(props.location.pathname).split("/").splice(1).join("/")} />
            <div className={classes.sort}>
                <InputLabel id="label">Sort</InputLabel>
                <Select autoWidth={true} labelId="label" label="Sort" defaultValue="none" onChange={handleSelectChange}>
                    <MenuItem value={"none"}>None</MenuItem>
                    <MenuItem value={"lowtohigh"}>Low - High</MenuItem>
                    <MenuItem value={"hightolow"}>High - Low</MenuItem>
                </Select>
            </div>
            <div className={classes.products}>
                { sort === 'none' && products.sort((a, b) => a.id - b.id).slice(indexOffirstProduct, indexOfLastProduct).map(productEntry)}
                { sort === 'lowtohigh' && products.sort((a, b) => a.price - b.price).slice(indexOffirstProduct, indexOfLastProduct).map(productEntry)}
                { sort === 'hightolow' && products.sort((a, b) => b.price - a.price).slice(indexOffirstProduct, indexOfLastProduct).map(productEntry)}
            </div>
            <Pagination count={Math.ceil(products.length/productsPerPage)} page={currentPage} onChange={handlePaginationChange} color="primary" style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}/>
        </React.Fragment>
    )
}

export default Viewall
