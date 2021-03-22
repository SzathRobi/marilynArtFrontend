import React, { useContext, useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import ProductCard from "./ProductCard/ProductCard";
import MarilynContext from "../../../contexts/MarilynContext";
import styles from "../../../styles/cart/CartList.module.css";

export default function CartList() {
  const { cart, cartTotal, incrementCartTotal, decrementCartTotal } = useContext(MarilynContext)

 /* var sum = numArr.reduce(function (total, currentValue) {
    return total + currentValue.num;
}, 0);
  */

const [isEmpty, setIsEmpty] = useState(false)
const [warning, setWarning] = useState(false)
const warningStyle = {
  color: warning ? "red" : "#000"
}

const toCheckout = () => {
  if(isEmpty) {
    setWarning(true)
    return
  }
  else {
    setWarning(false)
    alert("okes")
  }
}

useEffect(() => {
  if(cart.length === 0) {
    setIsEmpty(true)
  }
  else {
    setIsEmpty(false)
  }
}, [cart])

  return (
    <div className={styles.root}>
      <div className={styles.cartHeader}>
        <Typography className={styles.title} variant="h6">
          Termék
        </Typography>
        <Typography className={styles.title} variant="h6">
          Mennyiség
        </Typography>
        <Typography className={styles.title} variant="h6">
          Összesen
        </Typography>
      </div>
      <div className={styles.productList}>
        {isEmpty && <h2 className={styles.cartIsEmpty} style={warningStyle}>A kosara jeleneg üres!</h2>}
        {cart.map(product => (
          <ProductCard 
            product={product} 
            incrementCartTotal={incrementCartTotal}
            decrementCartTotal={decrementCartTotal}
          />
        ))
      }
        {/*<ProductCard />
        <ProductCard />*/}
      </div>
      <div className={styles.totalContainer}>
        <div className={styles.total}>
          <Typography className={styles.sum} variant="h6">
            Összesen: 
          </Typography>
          <Typography className={styles.huf} variant="h6"> {cartTotal} Ft</Typography>
        </div>
        <button onClick={() => toCheckout()} className={styles.btn}>TOVÁBB A FIZETÉSHEZ</button>
      </div>
    </div>
  );
}
