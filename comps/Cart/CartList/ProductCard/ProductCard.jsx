import React, { useEffect, useState } from "react";
import Image from "next/image";

import { TextField, Typography } from "@material-ui/core";
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
    <div className={styles.root}>
      <div className={styles.product}>
        <div className={styles.productInfo}>
          <div className={styles.imgContainer}>
            <img src={product.images[0].url} className={styles.img} alt="" />
          </div>
          <div className={styles.content}>
            <Typography className={styles.name} variant="h6">
              {product.Name}
            </Typography>
            <Typography className={styles.price} variant="h6">
              {product.price}Ft
            </Typography>
          </div>
        </div>
        
      </div>
      <div className={styles.container}>
        <div className={styles.quantityContainer}>
          <button onClick={decrement} className={styles.quantityBtn}>-</button>
          <TextField
            className={styles.quantity}
            variant="filled"
            size="small"
            type="text"
            onChange={(event) => updateQuanty(event)}
            value={quantity}
          />
          <button onClick={increment} className={styles.quantityBtn}>+</button>
        </div>
      </div>
      <div className={styles.container}>
        <Typography className={styles.totalPrice} variant="h6">
          {total} Ft
        </Typography>
      </div>
    </div>
  );
};

export default ProductCard;
