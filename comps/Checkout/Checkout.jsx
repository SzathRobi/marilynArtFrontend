import { makeStyles, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Billing from "./Billing/Billing";
import Order from "./Order/Order";
import CardForm from "./CardForm/CardForm";

//import StripeCheckout from 'react-stripe-checkout';
const useStyles = makeStyles({
  root: {
    padding: "1rem 0",
    position: "relative",
    top: 60
  },
  titleContainer: {
    margin: "3rem 0",
    padding: "3rem 0",
    backgroundColor: "#b3e5fc"
  },
  title: {
    fontWeight: 600,
    position: "relative",
    left: 200,
    opacity: 0,
    animation: "slideIn 1.2s forwards"
  }
});

const Checkout = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [step, setStep] = useState(1);
  const stepForward = () => setStep(2);
  const stepBack = () => setStep(1);

  const [product, setProduct] = useState({
    name: "Ametiszt vétel",
    price: 14,
    productBy: "marilynArt",
  })

  const makePayment = (token) => {
    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }

    return fetch("http://localhost:5000/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log("RESPONSE", response)
      const {status} = response
      console.log("STATUS", status)
    })
    .catch(error => console.log(error))
  }

  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography variant="h4" className={classes.title}>
          {step === 1 ? "Számlázási Cím" : "Kártya Adatok"}
        </Typography>
      </div>
      {step === 1 ? (
        <div>
          <Order />
          <Billing stepForward={stepForward} />
        </div>
      ) : (
        <CardForm stepBack={stepBack} />
      )}
      {/*<StripeCheckout 
        stripeKey="pk_test_51HuJSUJ8kbMcemu18YqyGw7rvvcOhAMI2ChyS6pwSXsG9aunu2aVLDXw1wUYnVytL1U721h5cvVsMOvdoIbNv6zT00VabWbEiA"
        token={makePayment}
        name="Ametiszt Vétel"
        amount={product.price}
        currency="USD"
        description="Big Data Stuff"
        panelLabel="Give Money"
      />*/}
    </div>
  );
};

export default Checkout;
