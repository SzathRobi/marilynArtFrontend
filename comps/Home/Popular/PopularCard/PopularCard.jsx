import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Typography } from "@material-ui/core";
import styles from "../../../../styles/home/PopularCard.module.css";

const PopularCard = ({ product }) => {
  const cardColor = {
    backgroundColor: "#81d4fa",
  };

  const btnStyle = {
    fontWeight: 600,
    color: "#33ace4",
    border: `2px solid #33ace4`,
    marginTop: "2rem",
  };

  return (
    <div className={styles.root} elevation={3}>
      <div className={styles.imgContainer}>
        <div className={styles.decor} style={cardColor}>
          <img
            src={product.images[0].url}
            loading="lazy"
            className={styles.img}
            alt=""
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <Typography className={styles.title} variant="h5">
          {product.Name}
        </Typography>
        <Typography color="textSecondary">{product.price} Ft</Typography>
        <Link href={`bolt/${product.slug}`}>
          <Button style={btnStyle} variant="outlined">
            Fedezd Fel
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PopularCard;
