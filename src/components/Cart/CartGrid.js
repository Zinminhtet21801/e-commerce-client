import { Grid } from "@mui/material";
import classes from './Cart.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartGrid = ({cartItems}) => { 
    return (
        <Grid container columnSpacing={1} rowSpacing={1}>
            <Grid container item xs={12} sm={8}>
                {cartItems.map(item => {
                    return (
                        <Grid container item xs={12} alignItems='flex-start' style={{ margin: '20px 0 20px 0' }}className={classes.roww} key={item.id}>
                            <Grid item xs={12} sm={3}>
                                <div>
                                    <img src={item.image} alt={item.title} className={classes.image}/>
                                    <p className={classes.product__title}>{item.title}</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={3} className={classes.text}>Price : ${item.price}</Grid>
                            <Grid item xs={12} sm={3} className={classes.text} justifyContent='start'>Qty : 
                                <div className={classes.qty__minus} onClick={() => console.log("reduce clicked")}>
                                    <RemoveIcon />
                                </div>
                                    {item.qty}
                                <div className={classes.qty__add} onClick={() => console.log("add clicked")}>
                                    <AddIcon />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={3} className={classes.text}>Total : ${(item.qty * item.price).toFixed(2)}</Grid>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid item xs={12} sm={4} className={classes.roww}>
                <div className={classes.checkout}>
                    <p className={classes.totalitems}>Total Items</p>
                    <h4 className={classes.totalitemlength}>{cartItems.length}</h4>
                    <p className={classes.totalpayment}>Total Payment</p>
                    <h3>$ {cartItems.map(item => item.qty * item.price).reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2)}</h3>
                    <div className={classes.buttons}>
                        <button className={classes.buttons__checkout}>Checkout</button>
                        <button className={classes.buttons__clear}>Clear</button>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default CartGrid