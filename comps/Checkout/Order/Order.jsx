import React from "react";

import { List, ListItem, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "3rem 0"
  },
  yourOrder: {
    fontWeight: 600
  },
  header: {
    margin: "2rem 0",
    display: "flex",
    justifyContent: "space-evenly",
    position: "relative",

    "&::before": {
      content: "''",
      width: "90%",
      height: 2,
      backgroundColor: "#4facfe",
      borderRadius: "8px",
      position: "absolute",
      bottom: -10,
      left: "5%",

      "@media (min-width: 768px)": {
        width: "70%",
        left: "15%"
      },

      "@media (min-width: 1024px)": {
        width: "60%",
        left: "20%"
      }
    }
  },
  quantity: {
    marginLeft: 40
  },
  details: {
    justifyContent: "space-evenly"
  },
  total: {
    margin: "2rem 5rem 3rem 0",
    display: "flex",
    justifyContent: "space-evenly",
    position: "relative",

    "&::before": {
      content: "''",
      width: "90vw",
      height: 2,
      backgroundColor: "#4facfe",
      borderRadius: "8px",
      position: "absolute",
      top: -10,
      left: "5vw",

      "@media (min-width: 768px)": {
        width: "70vw",
        left: "15vw"
      },

      "@media (min-width: 1024px)": {
        width: "60vw",
        left: "20vw"
      }
    }
  },
  totalDetail: {
    fontWeight: 600
  }
});

const Order = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.yourOrder} variant="h5">
        Rendelésed
      </Typography>
      <div className={classes.header}>
        <Typography variant="h6">Termék</Typography>
        <Typography variant="h6" className={classes.quantity}>
          Mennyiség
        </Typography>
        <Typography variant="h6">Ár</Typography>
      </div>
      <List>
        <ListItem className={classes.details}>
          <Typography>Ametiszt nyaklánc</Typography>
          <Typography>2</Typography>
          <Typography>2800Ft</Typography>
        </ListItem>
        <ListItem className={classes.details}>
          <Typography>Ametiszt nyaklánc</Typography>
          <Typography>2</Typography>
          <Typography>2800Ft</Typography>
        </ListItem>
      </List>
      <div className={classes.total}>
        <Typography variant="h6" className={classes.totalDetail}>
          Összesen:
        </Typography>
        <Typography variant="h6" className={classes.totalDetail}>
          5600Ft
        </Typography>
      </div>
    </div>
  );
};

export default Order;
