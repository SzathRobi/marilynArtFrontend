import React, { useEffect, useContext } from "react";
import { Typography } from "@material-ui/core";
import Link from "next/link";
import {parseCookies} from "nookies"
import axios from "axios";
import CartList from "../../comps/Cart/CartList/CartList";
import styles from "../../styles/cart/Cart.module.css"
import MarilynContext from "../../contexts/MarilynContext"  

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
      <Link className={styles.back} href="/bolt">
        <a>Vissza</a>
      </Link>
    </div>
  );
};

/*export async function getServerSideProps(ctx) {
  /*const jwt = parseCookies(ctx).jwt

  const res = await fetch(`https://marilynart-backend.herokuapp.com/orders`, {
  headers: {
    Authorization: `Bearer ${jwt}`
  }
  })
  
  const orders = await res.json()

return {
  props: {
          orders: orders
  },
};
}*/


export default Cart;