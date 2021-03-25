import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import Link from "next/link";


const useStyles = makeStyles({
  inputsContainer: {
    width: 320,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  row: {
    margin: "0.5rem 0"
  },
  btns: {
    margin: "3rem 0 1rem 10%",
    width: "80%",
    display: "flex",
    justifyContent: "space-evenly",

    "@media (min-width: 1024px)": {
      width: "60%",
      marginLeft: "20%"
    }
  },
  back: {
    position: "relative",
    color: "#4fc3f7",

    "&::before": {
      content: "''",
      width: 0,
      height: "2px",
      position: "absolute",
      bottom: -5,
      left: "-5%",
      backgroundColor: "#4fc3f7",
      transition: "400ms"
    },

    "&:hover::before": {
      width: "110%"
    }
  },
  pay: {
    backgroundColor: "#039be5",
    color: "#f4f4f4",
    "&:hover": {
      backgroundColor: "#0288D1"
    }
  }
});

const CardForm = ({ stepBack }) => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <form>
      <div className={classes.inputsContainer}>
        <TextField
          variant="outlined"
          className={classes.row}
          label="Tulajdonos Neve"
        />
        <TextField
          variant="outlined"
          className={classes.row}
          label="Kártyaszám"
        />
        <TextField
          variant="outlined"
          className={classes.row}
          label="Lejárati Dátum"
        />
        <TextField variant="outlined" className={classes.row} label="CVC" />
      </div>
      <div className={classes.btns}>
        <Button className={classes.back} onClick={stepBack}>
          Vissza
        </Button>
        <Link href="/checkout/confirmation">
          <Button className={classes.pay}>Fizetés</Button>
        </Link>
      </div>
    </form>
  );
};

export default CardForm;
