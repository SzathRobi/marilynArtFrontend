import React, { useState, useEffect } from "react";

import {
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import Popup from "./Popup/Popup";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#039be5",
    color: "#f4f4f4",
    "&:hover": {
      backgroundColor: "#0288D1",
    },
    "@media (min-width:1024px)": {
      fontSize: 15,
    },
  },
});

const Contact = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <Typography className={styles.title} variant="h4">
          Kapcsolat
        </Typography>
      </div>
      <div className={styles.addressesContainer}>
        <List className={styles.list}>
          <ListItem>
            <Typography className={styles.listTitle} variant="h6">
              Vác
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemText>2600, Köztársaság út 11-13</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>+36 30 420 6869</ListItemText>
          </ListItem>
          <ListItem>
            <iframe
              className={styles.googleMap}
              title="MarilynArt Vác"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2681.2270575008515!2d19.12796543165674!3d47.77704507207761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47402aec84b762e7%3A0x3aa97f82ced57b30!2zVsOhYywgS8O2enTDoXJzYXPDoWcgw7p0IDExLCAyNjAw!5e0!3m2!1shu!2shu!4v1603790912567!5m2!1shu!2shu"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: "none" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </ListItem>
        </List>

        <List className={styles.list}>
          <ListItem>
            <Typography className={styles.listTitle} variant="h6">
              Nézsa
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemText>0420 Passz utca 42</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>+36 30 420 6869</ListItemText>
          </ListItem>
          <ListItem>
            <iframe
              className={styles.googleMap}
              title="MarilynArt Nézsa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2681.2270575008515!2d19.12796543165674!3d47.77704507207761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47402aec84b762e7%3A0x3aa97f82ced57b30!2zVsOhYywgS8O2enTDoXJzYXPDoWcgw7p0IDExLCAyNjAw!5e0!3m2!1shu!2shu!4v1603790912567!5m2!1shu!2shu"
              frameBorder="0"
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </ListItem>
        </List>
      </div>

      <form className={styles.sendMsg}>
        <Typography className={styles.formTitle} variant="h5">
          Lépj velunk kapcsolatba!
        </Typography>
        <TextField className={styles.formRow} variant="outlined" label="Név" />
        <TextField
          className={styles.formRow}
          variant="outlined"
          label="Email"
        />
        <TextareaAutosize
          className={styles.textField}
          rowsMin={5}
          placeholder="Üzenet"
        />
        <Button className={classes.btn} onClick={openPopup}>
          Üzenet Küldése
        </Button>
      </form>
      <Popup popupOpen={popupOpen} closePopup={closePopup} />
    </div>
  );
};

export default Contact;
