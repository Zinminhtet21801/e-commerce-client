import React from 'react'
import classes from './Signup.module.css'
import Input from '@mui/material/Input'
// import FormHelperText from '@mui/material/FormHelperText'

const InputTextBox = ({type, label, inputName}) => {
    return (
        <React.Fragment>
            <div className={classes.inputs}>
                <h6 className={classes.labels}>{label}</h6>
                { label === "Address" ? 
                    <Input type={type} name={inputName} rows={4} multiline /> :
                    <Input type={type} name={inputName} required={true}/>
                }
                {/* <FormHelperText error>Please enter {label}</FormHelperText> */}
            </div>
        </React.Fragment>
    )
}

export default InputTextBox
