import React from "react";


import Link from "next/link";
import Image from "next/image"

import { Typography, Button } from "@material-ui/core";
import styles from "../../../styles/home/Landing.module.css";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  btn: {
    marginTop: 20,
    backgroundColor: "#039be5",
    color: "#f4f4f4",
    fontWeight: 600,
    position: "relative",
    top: 120,
    opacity: 0,
    transition: "300ms",
    animation: "homeLanding 0.8s 0.4s forwards",
    "&:hover": {
      backgroundColor: "#0288D1",
      border: "none",
      boxShadow: "0 0 6px #00f2fe"
    },
    "@media (min-width:1024px)": {
      fontSize: 15
    }
  }
});

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.bgContainer}>
        <img src="/homeBg.jpg" className={styles.bg} alt="" />
      </div>
      <img src="/crystals.svg" className={styles.crystal} alt="" />
      <div className={styles.content}>
        <Typography className={styles.text1} variant="h3">
          Kiváló Ásványok
        </Typography>
        <Typography className={styles.text2} variant="h3">
          Széles Választékban
        </Typography>
        <Link href="/bolt">
          <a className={styles.btn}>
            VÁSÁROLJON MOST
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
