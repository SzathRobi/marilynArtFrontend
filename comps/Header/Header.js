import React, { useState } from "react";
import Link from "next/link";
import Menu from "./Menu";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import styles from "../../styles/header/Header.module.css";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const updateDrawerOpen = () => setDrawerOpen(!drawerOpen);

  const user = null;

  return (
    <div>
      <AppBar className={styles.header}>
        <Toolbar>
          {/*<img src={logo} className={styles.logo} alt="" />*/}
          <Link href="/">
            <a className={styles.link}>MarilynArt</a>
          </Link>
          <IconButton
            onClick={updateDrawerOpen}
            className={styles.hamburger_container}
          >
            <MenuRoundedIcon
              fontSize="large"
              className={styles.hamburger_icon}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu drawerOpen={drawerOpen} updateDrawerOpen={updateDrawerOpen} />
    </div>
  );
};

export default Header;
