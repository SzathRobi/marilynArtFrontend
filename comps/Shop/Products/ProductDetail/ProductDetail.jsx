import React, { useEffect, useState } from "react";
import detailBg from "./detailBg.jpg";
import Link from "next/link";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import {
  Button,
  Card,
  CardMedia,
  CardActionArea,
  makeStyles,
  Typography,
  CardContent,
  TextField,
  IconButton
} from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    position: "relative",
    top: 55,
    paddingBottom: "2rem"
  },
  landing: {
    position: "relative"
  },
  bg: {
    width: "100%",
    maxHeight: "75vh"
  },
  title: {
    fontWeight: 600,
    color: "#f4f4f4",
    textShadow: "0 0 1px #000",
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)"
  },
  card: {
    width: "90%",
    paddingBottom: 20,
    margin: "3rem auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 1024px)": {
      flexDirection: "row"
    }
  },
  imgsContainer: {
    "@media (min-width: 1024px)": {
      margin: "0 2rem",
      width: "50%"
    }
  },
  img: {
    height: 200,
    "@media (min-width: 1024px)": {
      height: 400
    }
  },
  subImgContainer: {
    height: 100,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  subImg: {
    width: 90,
    height: 70,
    border: "1px solid #ba68c8",
    borderRadius: 4,
    cursor: "pointer"
  },
  cardTitleContainer: {
    display: "flex"
  },
  cardTitle: {
    marginTop: "1rem",
    fontWeight: 600,
    flex: 1
  },
  favIconBtn: {
    marginBottom: 10
  },
  favIcon: {
    fontSize: 35
  },
  price: {
    margin: "0 0 1rem"
  },
  textsContainer: {
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 1024px)": {
      flexDirection: "row",
      marginTop: "2.5rem"
    }
  },
  cardSubTitle: {
    margin: "1rem 0"
  },
  cardContent: {
    textAlign: "left"
  },
  quantityForm: {
    width: "100%",
    margin: "2rem 0.5rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: "1rem"
  },
  quantityBtns: {
    display: "flex",
    flexDirection: "column"
  },
  quantityBtn: {
    margin: ".1rem 0",
    backgroundColor: "#e1f5fe",
    border: "none",
    "&:hover": {
      backgroundColor: "#b3e5fc"
    }
  },
  quantity: {
    width: 70,
    padding: "0 10px"
  },
  icon: {
    fontSize: "1.2rem"
  },
  addToCart: {
    backgroundColor: "#039be5",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0288D1"
    }
  },
  backBtn: {
    position: "relative",
    color: "#4fc3f7",

    "&::before": {
      content: "''",
      width: 0,
      height: "2px",
      position: "absolute",
      bottom: -5,
      left: "-5%",
      backgroundColor: "#4fc3f7",
      transition: "400ms"
    },

    "&:hover::before": {
      width: "110%"
    }
  }
});

function ProductDetail() {
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

  return (
    <div className={classes.root}>
      <div className={classes.landing}>
        <img src={detailBg} className={classes.bg} alt="" />
        <Typography className={classes.title} variant="h4">
          Termékleírás
        </Typography>
      </div>

      <Card className={classes.card}>
        <div className={classes.imgsContainer}>
          <CardActionArea>
            <CardMedia className={classes.img} image={necklace} />
          </CardActionArea>
          <div className={classes.subImgContainer}>
            <CardMedia className={classes.subImg} image={necklace} />
            <CardMedia className={classes.subImg} image={necklace} />
            <CardMedia className={classes.subImg} image={necklace} />
          </div>
        </div>
        <CardContent className={classes.cardContent}>
          <div>
            <div className={classes.cardTitleContainer}>
              <Typography className={classes.cardTitle} variant="h5">
                Ametiszt Nyaklánc
              </Typography>
              <IconButton className={classes.favIconBtn} onClick={updateFav}>
                {fav ? (
                  <FavoriteIcon className={classes.favIcon} />
                ) : (
                  <FavoriteBorderIcon className={classes.favIcon} />
                )}
              </IconButton>
            </div>

            <Typography className={classes.price} variant="h5">
              1400Ft
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Kategória: Nyakláncok
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Készlet: Raktáron
            </Typography>
          </div>

          <div className={classes.textsContainer}>
            <div>
              <Typography className={classes.cardSubTitle} variant="h6">
                Leírás
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                pariatur voluptatum maiores minus reprehenderit modi!
              </Typography>
            </div>
            <div>
              <Typography className={classes.cardSubTitle} variant="h6">
                Története:
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                pariatur voluptatum maiores minus reprehenderit modi!
              </Typography>
            </div>
          </div>

          <form className={classes.quantityForm} onSubmit={handleSubmit}>
            <Typography variant="body2">Mennyiség:</Typography>
            <div className={classes.quantityContainer}>
              <TextField
                className={classes.quantity}
                variant="outlined"
                value={quantity}
              />
              <div className={classes.quantityBtns}>
                <button onClick={addQ} className={classes.quantityBtn}>
                  <AddRoundedIcon className={classes.icon} />
                </button>
                <button onClick={extractQ} className={classes.quantityBtn}>
                  <RemoveRoundedIcon className={classes.icon} />
                </button>
              </div>
            </div>

            <Button className={classes.addToCart} variant="contained">
              Kosárba
            </Button>
          </form>
        </CardContent>
      </Card>
      <Link href="/bolt" className={classes.backBtn}>
        Vissza
      </Link>
    </div>
  );
}

export default ProductDetail;
