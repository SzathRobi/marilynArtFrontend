import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Grid, TextField, Typography } from "@material-ui/core";
import styles from "../../../../styles/cart/ProductCard.module.css";

const ProductCard = ({product, incrementCartTotal, decrementCartTotal}) => {

  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(product.price)
  const increment = () => {
    setQuantity(quantity + 1)
    setTotal(total + product.price)
    incrementCartTotal(product)
  }
  const decrement = () => {
    setQuantity(quantity - 1)
    setTotal(total - product.price)
    decrementCartTotal(product)
  }
  const updateQuanty = (event) => setQuantity(Number(event.target.value)) 
/*
  const updateTotal = () => {
    setTotal(quantity * product.price)
  }
  useEffect(() => {
    updateTotal
  }, [quantity])
*/
  return (
    <Grid container className={styles.root}>
      <Grid className={styles.product} item container xs={4}>
        <div className={styles.productInfo}>
          <div className={styles.imgContainer}>
            <img src={product.images[0].url} className={styles.img} alt="" />
          </div>
          <div>
            <Typography className={styles.name} variant="h6">
              {product.Name}
            </Typography>
            <Typography className={styles.price} variant="h6">
              {product.price}Ft
            </Typography>
          </div>
        </div>
        
      </Grid>
      <Grid className={styles.container} item container xs={4}>
        <div className={styles.quantityContainer}>
          <TextField
            className={styles.quantity}
            variant="filled"
            type="text"
            onChange={(event) => updateQuanty(event)}
            value={quantity}
          />
          <div className={styles.quantityBtnContainer}>
            <button onClick={increment} className={styles.quantityBtn}>+</button>
            <button onClick={decrement} className={styles.quantityBtn}>-</button>
          </div>
        </div>
      </Grid>
      <Grid className={styles.container} item container xs={4}>
        <Typography className={styles.totalPrice} variant="h6">
          {total} Ft
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
