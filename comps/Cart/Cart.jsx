import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import Link from "next/link";
import CartList from "./CartList/CartList";
import styles from "../../styles/cart/Cart.module.css"
  

const Cart = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <Typography className={styles.title} variant="h4">
          Kosár
        </Typography>
      </div>
      <CartList />
      <Link className={styles.back} to="/shop">
        Vissza
      </Link>
    </div>
  );
};

export default Cart;
