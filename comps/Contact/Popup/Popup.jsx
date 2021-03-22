import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styles from "../../../styles/contact/Popup.module.css"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@material-ui/core";

export default function Popup({ popupOpen, closePopup }) {

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <div>
      <Dialog
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        TransitionComponent={Transition}
        keepMounted
        open={popupOpen}
        onClose={closePopup}
      >
       <DialogTitle id="alert-dialog-slide-title">{"Levelét megkaptuk!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Hamarosan válaszolunk Önnek.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closePopup} color="primary">
            Rendben
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
