import React, { useEffect, useState } from "react";
import Head from "next/head";
import SearchMenu from "../../comps/Shop/SearchMenu/SearchMenu";
import ShopLanding from "../../comps/Shop/ShopLanding/ShopLanding";
import Products from "../../comps/Shop/Products/Products";
import styles from "../../styles/shop/Shop.module.css";

const Shop = ({ products }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    //getData()
  }, []);

  return (
    <div className={styles.root}>
      <Head>
        <title>MarilynArt/Bolt</title>
      </Head>
      <ShopLanding />
      <div className={styles.container}>
        <SearchMenu />
        <Products products={products} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const { API_URL } = process.env;
  const product_res = await fetch(
    `https://marilynart-backend.herokuapp.com/products`
  );
  const products = await product_res.json();

  return {
    props: {
      products,
    },
    revalidate: 1,
  };
}

export default Shop;
