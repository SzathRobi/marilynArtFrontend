import React, { useState } from "react";

import {
  Collapse,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import styles from "../../../styles/shop/SearchMenu.module.css"
const SearchMenu = () => {
  
  const [ásványokOpen, setÁsványokOpen] = useState(false);
  const updateÁsványokOpen = () => setÁsványokOpen(!ásványokOpen);
  const ásványStyle = {
    transition: "300ms",
    transform: ásványokOpen ? "rotate(180deg)" : "rotate(0)"
  };

  const [ékszerekOpen, setÉkszerekOpen] = useState(false);
  const updateÉkszerekOpen = () => setÉkszerekOpen(!ékszerekOpen);
  const ékszerStyle = {
    transition: "300ms",
    transform: ékszerekOpen ? "rotate(180deg)" : "rotate(0)"
  };

  return (
    <div className={styles.root}>
      <form className={styles.searchForm}>
        <InputBase placeholder="keresés" />
        <IconButton className={styles.searchBtn}>
          <SearchRoundedIcon />
        </IconButton>
      </form>
      <List>
        <ListItem
          className={styles.category}
          button
          onClick={updateÁsványokOpen}
        >
          <ListItemText primary="Ásványok" />
          <ListItemIcon>
            <ArrowDropDownRoundedIcon style={ásványStyle} />
          </ListItemIcon>
        </ListItem>
        <Collapse
          className={styles.collapse}
          in={ásványokOpen}
          timeout="auto"
          unmountOnExit
        >
          <List>
            <ListItem button>
              <ListItemText className={styles.collapseText} primary="Összes" />
            </ListItem>
            <ListItem button>
              <ListItemText
                className={styles.collapseText}
                primary="Csakra Ásványok"
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                className={styles.collapseText}
                primary="Horoszkóp Ásványok"
              />
            </ListItem>
          </List>
        </Collapse>
      </List>

      <List>
        <ListItem className={styles.category} button>
          <ListItemText primary="Dísztárgyak" />
        </ListItem>
      </List>

      <List>
        <ListItem
          className={styles.category}
          button
          onClick={updateÉkszerekOpen}
        >
          <ListItemText primary="Ékszerek" />
          <ListItemIcon>
            <ArrowDropDownRoundedIcon style={ékszerStyle} />
          </ListItemIcon>
        </ListItem>
        <Collapse
          className={styles.collapse}
          in={ékszerekOpen}
          timeout="auto"
          unmountOnExit
        >
          <List>
            <ListItem button>
              <ListItemText className={styles.collapseText} primary="Összes" />
            </ListItem>
            <ListItem button>
              <ListItemText
                className={styles.collapseText}
                primary="Fülbevalók"
              />
            </ListItem>
            <ListItem button>
              <ListItemText className={styles.collapseText} primary="Gyűrűk" />
            </ListItem>
            <ListItem button>
              <ListItemText
                className={styles.collapseText}
                primary="Karkötők"
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                className={styles.collapseText}
                primary="Nyakláncok"
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                className={styles.collapseText}
                primary="Medálok"
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                className={styles.collapseText}
                primary="Ékszercsomagok"
              />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default SearchMenu;
