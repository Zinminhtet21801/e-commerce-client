import React from 'react'
import Grid from '@mui/material/Grid';
import classes from './Signup.module.css'
import InputTextBox from './InputTextBox';

const Signup = () => {
    return (
        <React.Fragment>
        <form method="POST" action="http://localhost:5000/signup">
            <Grid container>
                <Grid container item xs={12} md={5} justifyContent='center' className={classes.leftPanel}>
                    <img
                        src='https://res.cloudinary.com/haw010/image/upload/v1633616333/shopping-cart_yrvc2f.png' 
                        alt='shopping-cart'
                        className={classes.image}  
                        draggable='false'  
                    />
                </Grid>
                <Grid container item xs={12} md={7} columnSpacing='2' className={classes.rightPanel}>
                    
                        <Grid container item xs={12} sm={6} direction='column'>
                            <h2 className={classes.signup}>Sign Up</h2>
                            <InputTextBox label='Name' inputName='name'/>
                            <InputTextBox type='email' label='Gmail' inputName='gmail'/>
                            <InputTextBox type='password' label='Password' inputName='password'/>
                            <InputTextBox type='password' label='Comfirm Password' inputName='comfirmPassword'/>
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.rightInputs}>
                            <InputTextBox label='Phone' inputName='phone'/>
                            <InputTextBox label='City' inputName='city'/>
                            <InputTextBox label='Postal' inputName='postal'/>
                            <InputTextBox label='Address' inputName='address'/>
                        </Grid>
                        <Grid item xs={12} className={classes.buttons} >
                            <button className={classes.buttons__signup} type='submit'>Sign up</button>
                            <h6 className={classes.accountExist}>Already have an account.</h6>
                        </Grid>
                </Grid>
            </Grid>
        </form>
        </React.Fragment>
    )
}

export default Signup
