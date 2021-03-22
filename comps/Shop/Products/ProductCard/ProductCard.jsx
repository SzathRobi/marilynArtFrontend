import React, { useEffect, useState, useContext } from "react";
import MarilynContext from "../../../../contexts/MarilynContext"

import Link from "next/link";

import {
  makeStyles,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  Modal
} from "@material-ui/core";

import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import styles from "../../../../styles/shop/ProductCard.module.css"

const useStyles = makeStyles({
  cartBtn: {
    backgroundColor: "#039be5",
    color: "#f4f4f4",
    transition: "300ms",
    "&:hover": {
      backgroundColor: "#0288d1",
    }
  },
  infoBtn: {
    backgroundColor: "#4fc3f7",
    color: "#f4f4f4",
    transition: "300ms",
    "&:hover": {
      backgroundColor: "#29b6f6",
    }
  }
})

const ProductCard = ({ product }) => {

  const classes = useStyles()

  const [modalOpen, setModalOpen] = useState(false);
  const updateModalOpen = () => setModalOpen(!modalOpen);
  const [salePercentage, setSalePercentage] = useState(null)

  useEffect(() => {
    if(product.SalePrice) {
      setSalePercentage(parseInt(100 - (product.SalePrice / product.price * 100)))
    }
  }, [product])

  const { addToCart } = useContext(MarilynContext)

  return (
    <div className={styles.root}>

      <Card className={styles.productCard}>
      {product.onSale &&
      <div className={styles.badge}>
        <Typography className={styles.badgeContent}>{salePercentage}%</Typography>
      </div>
      }
        <CardActionArea
          className={styles.imgContainer}
          onClick={updateModalOpen}
        >
          <CardMedia className={styles.img} image={product.images[0].url}></CardMedia>
        </CardActionArea>
        <div>
          <Typography className={styles.name} variant="h5">{product.Name}</Typography>
          <Typography className={styles.price} variant="h6">
            {product.price} Ft
          </Typography>
        </div>
        <div className={styles.categoriesContainer}>
          {product.categories.map(category => (
            <Typography className={styles.category}>{category.name}</Typography>
          ))}
         </div>
        <CardActions className={styles.btnContainer}>
          <Link href={`bolt/${product.slug}`}>
            <Button
              className={classes.infoBtn}
              startIcon={<InfoOutlinedIcon />}
            >
              részletek
            </Button>
          </Link>
          <Button
            className={classes.cartBtn}
            startIcon={<AddShoppingCartOutlinedIcon />}
            onClick={() => addToCart(product)}
          >
            Kosárba
          </Button>
        </CardActions>
      </Card>
      <Modal open={modalOpen}>
        <div className={styles.modalContent}>
          <img className={styles.modalImg} src={product.images[0].url} alt="MarilynArt termék" />
          <Button
            className={styles.modalBtn}
            variant="contained"
            onClick={updateModalOpen}
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
