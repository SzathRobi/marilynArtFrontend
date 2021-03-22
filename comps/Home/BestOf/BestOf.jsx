import React, { useState } from "react";

import {
  Backdrop,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Fade,
  Paper,
  makeStyles,
  Modal,
  Typography
} from "@material-ui/core";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 100
  },
  mainTitle: {
    marginBottom: 100
  },
  productCard: {
    width: "80%",
    marginLeft: 17,
    padding: "2rem 1rem",
    position: "relative",
    backgroundColor: "#f3e5f5",
    "@media (min-width: 1024px)": {
      width: "60%",
      margin: "0 auto",
      padding: "2rem"
    }
  },
  cardTitle: {
    width: "140%",
    textAlign: "left",
    fontWeight: 600
  },
  content: {
    width: "55%",
    margin: "0 auto 0 0"
  },
  text: {
    textAlign: "left"
  },
  price: {
    width: 80,
    textAlign: "left",
    margin: "1rem 0",
    borderBottom: "2px solid #ba68c8"
  },
  badge: {
    padding: "5px 15px",
    backgroundColor: "#ba68c8",
    color: "#f4f4f4",
    borderRadius: 30,
    position: "absolute",
    top: -20,
    left: -12
  },
  cartBtn: {
    margin: "3rem 4rem 0 0",
    color: "#f4f4f4",
    backgroundColor: "#ba68c8",
    "&:hover": {
      backgroundColor: "#ab47bc"
    }
  },
  imgCard: {
    width: 175,
    heihgt: "80%",
    position: "absolute",
    top: "20%",
    right: -45,
    boxShadow: "-1px -1px 10px #ba68c8",
    "@media (min-width: 1024px)": {
      width: 300,
      heihgt: 50,
      top: "-10%"
    }
  },
  img: {
    height: 200
  },
  subImgContainer: {
    height: 100,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  subImg: {
    width: 50,
    height: 50,
    border: "1px solid #ba68c8",
    borderRadius: 4,
    cursor: "pointer"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    width: "80%",
    height: "50vh",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
    position: "relative"
  },
  modalImg: {
    width: "80%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
}));

const BestOf = () => {
  const classes = useStyles();

  const [actualImg, setActualImg] = useState(null);
 /* const toBracelet = () => setActualImg(bracelet);
  const toNecklace = () => setActualImg(necklace);
  const toAmetist = () => setActualImg(ametist2);*/

  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.mainTitle} variant="h4">
        A Hónap terméke
      </Typography>
      <Paper className={classes.productCard} elevation={3}>
        <div className={classes.content}>
          <div>
            <Typography className={classes.badge} variant="body1">
              Ékszerek
            </Typography>
            <Typography className={classes.cardTitle} variant="h5">
              Ametiszt Nyaklánc
            </Typography>
            <Typography className={classes.price} variant="h5">
              1600Ft
            </Typography>
          </div>
          <Typography className={classes.text} variant="body1">
            Lorem ipsum dolor sit amet consecter adipisicing elit. Aliquam,
            dolore provident! Velit reiciendis, saepe minima accusamus modi
            provident minus expedita.
          </Typography>

          <Button
            className={classes.cartBtn}
            startIcon={<AddShoppingCartIcon />}
            variant="contained"
          >
            Kosárba
          </Button>
        </div>
        <Card className={classes.imgCard}>
          <CardActionArea onClick={openPopup}>
            <CardMedia
              className={classes.img}
              image={actualImg}
              title="Ametiszt Nyaklánc"
            />
          </CardActionArea>
          <Paper className={classes.subImgContainer}>
            
          </Paper>
        </Card>
      </Paper>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={popupOpen}
        onClose={closePopup}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={popupOpen}>
          <div className={classes.paper}>
            <img src={actualImg} className={classes.modalImg} alt="" />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default BestOf;
