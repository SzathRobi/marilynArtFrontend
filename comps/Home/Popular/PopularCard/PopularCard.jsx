import React from "react";
import Image from "next/image"
import { Button, Card, Typography } from "@material-ui/core";
import styles from "../../../../styles/home/PopularCard.module.css"

const PopularCard = ({ product }) => {

  const cardColor = {
    backgroundColor: "#81d4fa"
  };

  const CardBtnColor = {
    fontWeight: 600,
    color: "#33ace4",
    border: `2px solid #33ace4`
  };

  return (
    <div className={styles.root} elevation={3}>
      <div className="imgContainer">
        <div className={styles.decor} style={cardColor}>
          <img src={product.images[0].url} loading="lazy" className={styles.img} alt="" />
        </div>
      </div>
      <div className={styles.textContainer}>
      <Typography className={styles.title} variant="h5">
        {product.Name}
      </Typography>
        <Typography color="textSecondary">{product.price} Ft</Typography>
        <Typography variant="h6" className={styles.description}>
          {product.description}
        </Typography>
        <Button style={CardBtnColor} variant="outlined">
          Fedezd Fel
        </Button>
      </div>
    </div>
  );
};

export default PopularCard;
