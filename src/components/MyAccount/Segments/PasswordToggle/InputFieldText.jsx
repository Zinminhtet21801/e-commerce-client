import Box from "@mui/material/Box";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const InputTextField = ({ id, data, title, pwdToggle, onType, onFocus }) => {
  const [editUserData, setEditUserData] = useState("");
  const [pwdToggler, setPwdToggler] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const inputChangeHandler = (event) => {
    setEditUserData(event.target.value);
    onType(event.target.id, event.target.value.trim());
  };

  const onFocusHandler = (event) =>{
    onFocus(event.target.id)
  }

  return (
    <Box
      sx={{
        maxWidth: "100%",
        paddingTop: "10px",
      }}
    >
      <OutlinedInput
        fullWidth
        type={title !== "password" ? "text" : (pwdToggler ? "text" : "password")}
        id={id}
        placeholder={title === "password" && data}
        size="small"
        onChange={inputChangeHandler}
        value={editUserData ? editUserData : data}
        onFocus={onFocusHandler}
        endAdornment={
          title === "password" && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => {
                  setPwdToggler((prevValue) => !prevValue);
                  pwdToggle(pwdToggler);
                }}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {/* {IsShowPassword ? console.log(IsShowPassword) : console.log("no")} */}
                {pwdToggler ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
      />
    </Box>
  );
};

export default InputTextField;
