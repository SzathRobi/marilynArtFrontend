import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useEffect } from "react";

import Link from "next/link";

const useStyles = makeStyles({
  root: {
    position: "relative",
    marginTop: "5rem"
  },
  title: {
    margin: "2rem 0 3rem",
    fontWeight: 600
  },
  inputsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",

    "@media (min-width: 768px)": {
      width: "80%",
      marginLeft: "10%",
      flexDirection: "row"
    },

    "@media (min-width: 1024px)": {
      width: "60%",
      marginLeft: "20%"
    }
  },
  identity: {
    display: "flex",
    flexDirection: "column"
  },
  identityBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  address: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  input: {
    margin: "0.5rem 0",
    width: 300
  },
  btnContainer: {
    width: "80%",
    margin: "4rem 0 2rem 10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",

    "@media (min-width: 1024px)": {
      width: "60%",
      marginLeft: "20%"
    }
  },
  back: {
    position: "relative",
    color: "#4facfe",

    "&::before": {
      content: "''",
      width: 0,
      height: "2px",
      position: "absolute",
      bottom: -5,
      left: "-5%",
      backgroundColor: "#4facfe",
      transition: "400ms"
    },

    "&:hover::before": {
      width: "110%"
    }
  },
  next: {
    backgroundColor: "#039be5",
    color: "#f4f4f4",
    "&:hover": {
      backgroundColor: "#0288D1"
    }
  }
});

const Billing = ({ stepForward }) => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <form className={classes.root}>
      <Typography className={classes.title} variant="h5">
        Számlázási Adatok
      </Typography>
      <div className={classes.inputsContainer}>
        <div className={classes.identity}>
          <div className={classes.identityBlock}>
            <TextField
              className={classes.input}
              variant="outlined"
              label="Vezetéknév"
            />
            <TextField
              className={classes.input}
              variant="outlined"
              label="Keresztnév"
            />
          </div>
          <div className={classes.identityBlock}>
            <TextField
              className={classes.input}
              variant="outlined"
              label="Telefon"
            />
            <TextField
              className={classes.input}
              variant="outlined"
              label="Email"
            />
          </div>
        </div>
        <div className={classes.address}>
          <TextField
            className={classes.input}
            variant="outlined"
            label="Város"
          />
          <TextField
            className={classes.input}
            variant="outlined"
            label="Irányitószám"
          />
          <TextField
            className={classes.input}
            variant="outlined"
            label="Utca"
          />
          <TextField
            className={classes.input}
            variant="outlined"
            label="Házszám"
          />
        </div>
      </div>

      <div className={classes.btnContainer}>
        <Link href="/kosár" className={classes.back}>
          VISSZA
        </Link>
        <Button
          onClick={stepForward}
          className={classes.next}
          variant="contained"
        >
          Tovább
        </Button>
      </div>
    </form>
  );
};

export default Billing;
