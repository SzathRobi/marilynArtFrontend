import React from "react";
import Image from "next/image"

import { makeStyles, Typography } from "@material-ui/core";
import styles from "../../../styles/shop/ShopLanding.module.css"

/*const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "60vh",
    marginBottom: "1rem",
    position: "relative",
    overflow: "hidden"
  },
  bg: {
    width: "100%",
    minWidth: 550,
    filter: "brightness(40%)"
  },
  title: {
    color: "#f4f4f4",
    fontWeight: 600,
    position: "absolute",
    top: "30%",
    left: "20%",
    //transform: "translateX(100%)",
    zIndex: 1000
  }
});*/
const ShopLanding = () => {
  //const classes = useStyles();
  return (
    <div className={styles.root}>
      <Image src="/shopBg.jpg" layout="fill" className={styles.bg} alt="" />
      <Typography className={styles.title} variant="h3">
        Termékeink
      </Typography>
    </div>
  );
};

export default ShopLanding;
