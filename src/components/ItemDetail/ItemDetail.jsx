import React, { useEffect, useReducer, useState } from "react";
import Carousel from "react-multi-carousel";
import URLCrumb from "../BreadCrumbs/URLCrumb";
import classes from "./ItemDetail.module.css";
import axios from "axios";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useParams } from "react-router";

const getApi = async (id) => {
  return axios.get(`https://fakestoreapi.com/products/${id}`);
};

const qtyReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return parseInt(action.value) ? {value : parseInt(action.value)} : {value : 0};
    case "INC":
      return {value : state.value + 1};
      case "DEC" : return state.value > 1 ? {value : state.value - 1} : {value : state.value}
    default:
      return state.value;
  }
};

const ItemDetail = ({location, onAdd}) => {
  
  const { category, id } = useParams();
  const [item, setItem] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [qty1, setQty1] = useReducer(qtyReducer, { value: 1 });
  // const url = props.location.pathname;
  // const separatedURL = url.split("/").splice(1);
  // const separatedURL = location.split("/").splice(1);
  // const itemID = separatedURL[2];
  useEffect(() => {
    setIsLoading(true);
    getApi(id).then((data) => data && setItem(data.data));
    setIsLoading(false);
  }, [id]);


  return (
    <React.Fragment>
      <URLCrumb url={`/category/${category}/${id}`} />
      {isLoading ? (
        <p>Loading</p>
      ) : (
        item && (
          <div className={`container ${classes["item_container"]}`}>
            <div className={`row ${classes["row_container"]}`}>
              <div className={`col-lg-6 ${classes["left_container"]}`}>
                <img src={item.image} alt="img" />
              </div>
              <div className={`col-lg-6 ${classes["right_container"]}`}>
                <span className={`${classes.id}`}>ID : {item.id}</span>
                <p className={`${classes.title}`}>{item.title}</p>
                <div className={`${classes["stock_container"]}`}>
                  <span className={`${classes.stock}`}>stock : </span>
                  <span>in-stock</span>
                </div>
                <div className={`${classes["price_container"]}`}>
                  <p className={`${classes.price}`}>Price - ${item.price}</p>
                </div>
                <div>
                  <div className={`${classes["quantity_container"]}`}>
                    <span className={`${classes.quantity}`}>Quantity : </span>
                    <div className={`${classes["quantity_select"]}`}>
                      <input
                        type="text"
                        className={`${classes["quantity_input"]}`}
                        value={qty1.value}
                        onChange={(event) =>
                          setQty1({ type: "INPUT", value: event.target.value })
                        }
                      />
                      <div className={`${classes["qty_btn"]}`}>
                        <div
                          className={`${classes["qty_inc_btn"]}`}
                          onClick={() => setQty1({ type: "INC" })}
                        >
                          <KeyboardArrowUpIcon sx={{fontSize : 20}}/>
                        </div>
                        <div
                          className={`${classes["qty_dec_btn"]}`}
                          onClick={() => setQty1({ type: "DEC" })}
                        >
                          <KeyboardArrowDownIcon sx={{fontSize : 20}} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${classes["btn_container"]}`}>
                  <button className={`btn ${classes["clickable_button"]}`} onClick={() => onAdd({...item, qty: qty1.value})}>
                    <ShoppingCartIcon /> Add To Cart
                  </button>
                  <button className={`btn ${classes["clickable_button"]}`}>
                    Buy Now
                  </button>
                </div>
                <div className={`${classes["description_container"]}`}>
                  <p className={`${classes["description_text"]}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </React.Fragment>
  );
};

export default ItemDetail;
