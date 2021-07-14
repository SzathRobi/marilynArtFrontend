import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";

import CartList from "../../comps/Cart/CartList/CartList";
import styles from "../../styles/cart/Cart.module.css";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.root}>
      <Head>
        <title>MarilynArt/Kosár</title>
      </Head>
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

export default Cart;
