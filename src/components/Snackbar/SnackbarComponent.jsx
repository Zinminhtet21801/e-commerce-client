import * as React from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarComponent({message}) {
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);
  const splittedMsg = message && message.split("|");
  const [msg, setMsg] = useState("")
  const handleClick = () => {
    setMsg(message)
    setOpen(true)
    
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };



  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Button
        variant="outlined"
        onClick={
          // msg !== message ? handleClick() : console.log("OK")
          msg !== message   ? handleClick() : ()=>{}
        }
        hidden
      />
      {message && (<Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        TransitionComponent={transition}
        key={transition ? transition.name : ""}
      >
        <Alert
          onClose={handleClose}
          severity={
            splittedMsg && splittedMsg[0].includes("success")
              ? "success"
              : "error"
          }
          sx={{ width: "100%" }}
        >
          {splittedMsg[1]}
        </Alert>
      </Snackbar>)}
    </Stack>
  );
}
