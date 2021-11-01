import React, { useState } from 'react'
import classes from './Signup.module.css'
import Input from '@mui/material/Input'
import FormHelperText from '@mui/material/FormHelperText'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const InputTextBox = ({type, label, inputName, handleInputChange, passwordToggle, phoneToggle}) => {

    const [ showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const checkLabel = () => {
        if(label === "Address") {
            return (
                <Input
                type={type} 
                name={inputName}
                required={true}
                rows={2} multiline 
                onChange={(e) => {handleInputChange({[e.target.name]: e.target.value})}} 
                /> 
            )
        } else if(label === "Password" || label === "Comfirm Password") {
            return (
                <Input
                name={inputName} 
                required={true}
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => {handleInputChange({[e.target.name]: e.target.value})}}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }                
                />
            )
        } else {
            return (
                <Input 
                type={type} 
                name={inputName} 
                required={true} 
                onChange={(e) => {handleInputChange({[e.target.name]: e.target.value})}}
                />
            )
        }
    }

    return (
        <React.Fragment>
            <div className={classes.inputs}>
                <h6 className={classes.labels}>{label}</h6>     
                {checkLabel()}
                {passwordToggle && <FormHelperText error>Passwords don't match!!!</FormHelperText>}
                {phoneToggle && <FormHelperText error>must be 11 digits(no space)!!!</FormHelperText>}
            </div>
        </React.Fragment>
    )
}

export default InputTextBox
