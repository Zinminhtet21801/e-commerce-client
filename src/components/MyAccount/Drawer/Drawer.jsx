import * as React from "react";
import classes from "./Drawer.module.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AppsIcon from "@mui/icons-material/Apps";
export default function LeftDrawer({ urlHandler, urlShrinkHandler }) {
  const [state, setState] = React.useState({
    left: false,
  });
  const [urlLink, setUrlLink] = React.useState("/my account");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    !open ? urlShrinkHandler(false) : urlShrinkHandler(true);

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["My Account", "Order History"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <AccountBoxIcon /> : <ReceiptIcon />}
            </ListItemIcon>
            <ListItemText>
              <div>
                <span
                  onClick={() => {
                    setUrlLink(`/${text.toLowerCase()}`);
                    urlHandler(`/${text.toLowerCase()}`);
                  }}
                  className={`nav-link `}
                  style={{ color: "black" }}
                >
                  {text}
                </span>
              </div>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
          >
            <AppsIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
