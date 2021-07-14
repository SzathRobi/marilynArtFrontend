import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";

import {
  Button,
  Card,
  CardMedia,
  CardActionArea,
  Typography,
  makeStyles,
  CardContent,
  TextField,
  IconButton,
} from "@material-ui/core";
const useStyles = makeStyles({
  cartBtn: {
    backgroundColor: "#039be5",
    color: "#f4f4f4",
    transition: "300ms",
    "&:hover": {
      backgroundColor: "#0288d1",
    },
  },
});
import styles from "../../styles/shop/ProductDetail.module.css";

function ProductDetail({ product }) {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [fav, setFav] = useState(false);
  const updateFav = () => setFav(!fav);

  const [quantity, setQuantity] = useState(1);
  const addQ = () => setQuantity(quantity + 1);
  const extractQ = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [actualImg, setActualImg] = useState(product.images[0].url);
  const updateActualImage = (image) => {
    setActualImg(image);
  };

  return (
    <div className={styles.root}>
      <Head>
        <title>MarilynArt/{product.Name}</title>
      </Head>
      <div className={styles.landing}>
        <Image src="/detailBg" layout="fill" className={styles.bg} alt="" />
        <Typography className={styles.title} variant="h4">
          Termékleírás
        </Typography>
      </div>

      <Card className={styles.card}>
        <IconButton className={styles.favIconBtn} onClick={updateFav}>
          {/*fav ? (
            <FavoriteIcon className={styles.favIcon} />
          ) : (
            <FavoriteBorderIcon className={styles.favIcon} />
          )*/}
        </IconButton>
        <div className={styles.imgsContainer}>
          <CardActionArea>
            <CardMedia className={styles.img} image={actualImg} />
          </CardActionArea>
          <div className={styles.subImgContainer}>
            {product.images.map((image) => (
              <CardMedia
                key={image.url}
                className={styles.subImg}
                image={image.url}
                onClick={() => updateActualImage(image.url)}
              />
            ))}
          </div>
        </div>
        <CardContent className={styles.cardContent}>
          <Typography className={styles.cardTitle} variant="h4">
            {product.Name}
          </Typography>
          <div className={styles.mainContent}>
            <div className={styles.contentContainer}>
              <Typography className={styles.price}>
                {product.price}Ft
              </Typography>
              <div className={styles.categoriesContainer}>
                <Typography
                  className={styles.categoryName}
                  variant="h6"
                  color="textSecondary"
                >
                  Kategória:
                </Typography>
                {product.categories.map((category) => (
                  <Typography className={styles.category}>
                    {category.name}
                  </Typography>
                ))}
              </div>
            </div>

            <div className={styles.textsContainer}>
              <div>
                {product.description && (
                  <Typography className={styles.cardSubTitle}>
                    Leírás
                  </Typography>
                )}
                <Typography className={styles.desc} variant="body1">
                  {product.description}
                </Typography>
              </div>
            </div>
          </div>
          <form className={styles.quantityForm} onSubmit={handleSubmit}>
            <Typography style={{ marginRight: "1rem" }} variant="h6">
              Mennyiség:
            </Typography>
            <div className={styles.quantityContainer}>
              <TextField
                className={styles.quantity}
                variant="outlined"
                value={quantity}
              />
              <div className={styles.quantityBtns}>
                <button onClick={addQ} className={styles.quantityBtn}>
                  <AddRoundedIcon className={styles.icon} />
                </button>
                <button onClick={extractQ} className={styles.quantityBtn}>
                  <RemoveRoundedIcon className={styles.icon} />
                </button>
              </div>
            </div>

            <Button className={classes.cartBtn} variant="contained">
              Kosárba
            </Button>
          </form>
        </CardContent>
      </Card>
      <Link href="/bolt">
        <a className={styles.backBtn}>Vissza</a>
      </Link>
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const product_res = await fetch(
    `https://marilynart-backend.herokuapp.com/products/?slug=${slug}`
  );
  const found = await product_res.json();

  return {
    props: {
      product: found[0], // response is an array
    },
  };
}

export async function getStaticPaths() {
  const product_res = await fetch(
    `https://marilynart-backend.herokuapp.com/products`
  );
  const products = await product_res.json();

  return {
    paths: products.map((product) => ({
      params: { slug: String(product.slug) },
    })),
    fallback: false, // if Url doesn't exist --> show 404page
  };
}

export default ProductDetail;
