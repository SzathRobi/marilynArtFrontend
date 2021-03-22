import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import styles from "../../../styles/shop/Products.module.css";

const Products = ({products}) => {

  return (
    <div className={styles.root}>
      {products.map(product => <ProductCard key={product.id} product={product}/>)}
    </div>
  );
};

export default Products;
