import { useContext, useState } from "react";
import MarilynContext from "../../../contexts/MarilynContext";
import ProductCard from "./ProductCard/ProductCard";
import styles from "../../../styles/shop/Products.module.css";
import { useEffect } from "react";

const Products = ({ products }) => {
  const { categoryTab } = useContext(MarilynContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const filterProducts = () => {
    const filtered = products.filter(
      (product) => product.categories[0].name === categoryTab
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [categoryTab]);

  return (
    <div className={styles.root}>
      {categoryTab === "Összes"
        ? products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
  );
};

export default Products;
