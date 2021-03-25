import React from "react";

import Link from "next/link";

import {
  Drawer,
  IconButton,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Badge,
  makeStyles
} from "@material-ui/core";

import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import StoreMallDirectoryRoundedIcon from "@material-ui/icons/StoreMallDirectoryRounded";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styles from "../../styles/header/Menu.module.css"

const useStyles = makeStyles({
  root: {},
  closeBtn: {
    position: "relative",
    left: "-0.5rem",
    padding: "0.5rem",
    backgroundColor: "#fff"
  },
  divider: {
    margin: "10px 0 0 0"
  }
});

const Menu = ({ drawerOpen, updateDrawerOpen }) => {
  const classes = useStyles();

  return (
    <Drawer variant="persistent" anchor="right" open={drawerOpen}>
      <List
        component="nav"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <IconButton onClick={updateDrawerOpen} className={classes.closeBtn}>
              <CloseRoundedIcon fontSize="small"/>
            </IconButton>
            Menü
          </ListSubheader>
        }
      >
        <Link href="/">
          <a>
            <ListItem button onClick={updateDrawerOpen}>
              <ListItemIcon>
                <HomeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Főoldal" />
            </ListItem>
          </a>  
        </Link>
        <Link href="/bolt">
          <a>    
            <ListItem button onClick={updateDrawerOpen}>
              <ListItemIcon>
                <StoreMallDirectoryRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Bolt" />
            </ListItem>
          </a>
        </Link>
        <Link href="/kapcsolat">
          <a>
            <ListItem button onClick={updateDrawerOpen}>
              <ListItemIcon>
                <ContactMailRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Kapcsolat" />
            </ListItem>
          </a>
        </Link>

        <Divider />
     
        <Link href="/auth/bejelentkezes">
          <a>
            <ListItem button onClick={updateDrawerOpen}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Bejelentkezés" />
            </ListItem>
          </a>
        </Link>
       
        <Link href="/kosar">
          <a>
            <ListItem button onClick={updateDrawerOpen}>
              <ListItemIcon>
                <Badge badgeContent={2} color="secondary">
                  <ShoppingCartRoundedIcon />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Kosár" />
            </ListItem>
          </a>    
        </Link>
      </List>
    </Drawer>
  );
};

export default Menu;
