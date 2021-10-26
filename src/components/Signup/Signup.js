import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import classes from './Signup.module.css'
import InputTextBox from './InputTextBox';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [inputs, setInputs] = useState({
        name: '',
        gmail: '',
        password: '',
        comfirmPassword: '',
        phone: '',
        city: '',
        postal: '',
        address: ''
    })
    const [ passwordErrorToggle, setPasswordErrorToggle ] = useState(false)
    const [ phoneErrorToggle, setPhoneErrorToggle ] = useState(false)
    // const [ toggle, setToggle ] = useState()

    const handleInputChange = v => {
        const key = Object.keys(v)[0];
        const value = Object.values(v)[0];
        setInputs(prev => ({...prev, [key] : value}))
    }

    console.log(inputs)

    useEffect(() => {

        if(inputs.password && inputs.comfirmPassword) {
            if(inputs.password !== inputs.comfirmPassword) {
                setPasswordErrorToggle(true)
            }else {
                setPasswordErrorToggle(false)
            }
        }
        
        if(inputs.phone) {
            if(!inputs.phone.match(/(\d{11})/g) || inputs.phone.length > 11) {
                setPhoneErrorToggle(true)
            }else{
                setPhoneErrorToggle(false)
            }
        } else {
            setPhoneErrorToggle(false)
        }
        
        
    }, [inputs])

    
    return (
        <React.Fragment>
        <form method="POST" action="http://localhost:5000/signup">
            <Grid container>
                <Grid container item xs={12} md={5} justifyContent='center' id={classes.leftPanel}>
                    <img
                        src='https://res.cloudinary.com/haw010/image/upload/v1633616333/shopping-cart_yrvc2f.png' 
                        alt='shopping-cart'
                        className={classes.image}  
                        draggable='false'  
                    />
                </Grid>
                <Grid container item xs={12} md={7} columnSpacing='2' id={classes.rightPanel}>
                    <Grid container item xs={12} sm={6} direction='column'>
                        <h2 className={classes.signup}>Sign Up</h2>
                        <InputTextBox label='Name' inputName='name' handleInputChange={handleInputChange}/>
                        <InputTextBox type='email' label='Gmail' inputName='gmail' handleInputChange={handleInputChange}/>
                        <InputTextBox type='password' label='Password' inputName='password' handleInputChange={handleInputChange} passwordToggle={passwordErrorToggle}/>
                        <InputTextBox type='password' label='Comfirm Password' inputName='comfirmPassword' handleInputChange={handleInputChange} passwordToggle={passwordErrorToggle}/>
                    </Grid>
                    <Grid item xs={12} sm={6} id={classes.rightInputs}>
                        <InputTextBox label='Phone' inputName='phone' handleInputChange={handleInputChange} phoneToggle={phoneErrorToggle}/>
                        <InputTextBox label='City' inputName='city' handleInputChange={handleInputChange}/>
                        <InputTextBox label='Postal' inputName='postal' handleInputChange={handleInputChange}/>
                        <InputTextBox label='Address' inputName='address' handleInputChange={handleInputChange}/>
                    </Grid>
                    <Grid item xs={12} className={classes.buttons} >
                        <button className={classes.buttons__signup} type='submit'>Sign up</button>
                        <h6 className={classes.accountExist}>Already have an account? Login</h6>
                    </Grid>
                </Grid>
            </Grid>
        </form>
        </React.Fragment>
    )
}

export default Signup
