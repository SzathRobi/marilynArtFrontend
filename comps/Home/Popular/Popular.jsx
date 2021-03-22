import React from "react";
import PopularCard from "./PopularCard/PopularCard";
import { Typography } from "@material-ui/core";
import styles from "../../../styles/home/Popular.module.css"

const Popular = ({ featuredProducts }) => {

  return (
    <div className={styles.root}>
      <Typography variant="h3" className={styles.title}>
        Népszerű Termékek
      </Typography>
      <div className={styles.cardContainer}>
        {featuredProducts.map(product => (
          <PopularCard product={product} />
        ))}
      </div>
    </div>
  );
};



export default Popular;
