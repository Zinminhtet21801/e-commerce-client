import React, { useState } from "react";
import { useEffect } from "react";
import classes from "./OrderHistorySegment.module.css";
import { Grid, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import dummyImage from "./184625-removebg-preview.png";

const monthShortNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let prevItemDate = 0;
const sortingNumber = (array) => {
  if (array.length > 0) {
    return array.sort(function (a, b) {
      return Number(a.date.split(",")[0]) - Number(b.date.split(",")[0]);
    });
  }
};
const date = new Date();

const OrderHistorySegment = (props) => {
  const [value, setValue] = React.useState(date);
  const [orderHistory, setOrderHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchOrderHistory = async () => {
      setIsLoading(true);
      await fetch(
        "https://react-http-fd38c-default-rtdb.firebaseio.com/order.json"
      )
        .then((response) => response.json())
        .then((data) => setOrderHistory(data.items));
      setIsLoading(false);
    };
    fetchOrderHistory();
  }, []);

  const filteredDate = orderHistory.filter(
    (order) =>
      order.date === `${value.getMonth() + 1},${value.getUTCFullYear()}`
  );
  
  let sortingDate =
    filteredDate.length > 0 &&
    filteredDate[0].item.map((item) => {
      return item;
    });

  let sortedItem = sortingNumber(sortingDate);
  const orders =
    sortedItem? (
      sortedItem.map((item, index) => (
        <div key={index}>
          {prevItemDate !== Number(item.date.split(",")[0]) && (
            <div style={{ marginTop: "20px" }}>
              <h4>
                {item.date.split(",")[0] +
                  " " +
                  monthShortNames[item.date.split(",")[1] - 1] +
                  ", " +
                  item.date.split(",")[2]}
              </h4>
              <span style={{ display: "none" }}>
                {(prevItemDate = Number(item.date.split(",")[0]))}
              </span>
            </div>
          )}
          <Grid
            container
            spacing={2}
            sx={{ marginTop: "10px", marginLeft: "0", width: "auto" }}
            className={classes.item_grid}
          >

            <Grid
              item
              lg={3}
              md={3}
              sm={3}
              xs={6}
              style={{ alignSelf: "center" }}
            >
              <div>
                <img
                  src={dummyImage}
                  alt="img"
                  style={{
                    backgroundColor: "white",
                    width: "100px",
                  }}
                />
              </div>
            </Grid>
            <Grid item container lg={9} xl={9} md={9} sm={9} xs={6}>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <div>
                  <p className={classes.item_name_text}>{item.itemName}</p>
                </div>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <div>
                  <p className={classes.qty_text}>x{item.qty}</p>
                </div>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <div>
                  <p className={classes.price_text}>${item.singleItemPrice}</p>
                </div>
              </Grid>
            </Grid>
            </Grid>
        </div>
      ))
    ) : isLoading ? (
      <h4 className={classes.no_data_found}>Loading...🤓</h4>
    ) : (
      <h4 className={classes.no_data_found}>No Data Found... 😟 </h4>
    );

  
  return (
    <React.Fragment>
      <div className={classes.outer_container}>
        <Box sx={{ flexGrow: 1 }} className={classes.header_container}>
          <Grid container>
            <Grid item xl={10} lg={9} md={6} sm={6} xs={12}>
              <div>
                <h1 className={classes.page_title}>History</h1>
              </div>
            </Grid>
            <Grid
              item
              xl={2}
              lg={3}
              md={6}
              sm={6}
              xs={12}
              marginTop={2}
              marginBottom={2}
            >
              <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    views={["year", "month"]}
                    label="Month and Year"
                    minDate={new Date("2000-01-01")}
                    // maxDate={new Date("2023-06-01")}
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        helperText={null}
                        disabled
                        contentEditable={false}
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </Grid>
          </Grid>
        </Box>
        <div>
          <div className={classes.container}>
            <Box sx={{ flexGrow: 1, margin: "auto" }}>
            {orders}
            </Box>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderHistorySegment;
