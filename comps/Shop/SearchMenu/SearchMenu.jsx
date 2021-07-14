import React, { useState, useContext } from "react";
import {
  Collapse,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import MarilynContext from "../../../contexts/MarilynContext";
import styles from "../../../styles/shop/SearchMenu.module.css";
const SearchMenu = () => {
  const categories = ["Összes", "Ásvány", "Füstölő", "Karkötő", "Nyaklánc"];
  const { setCategoryTab } = useContext(MarilynContext);
  const updateCategoryTab = (event) => {
    setCategoryTab(event.target.innerText);
  };

  return (
    <div className={styles.root}>
      <List className={styles.categories}>
        {categories.map((category) => (
          <ListItem
            key={category}
            onClick={(event) => updateCategoryTab(event)}
            className={styles.category}
            button
          >
            <ListItemText className={styles.categoryText} primary={category} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SearchMenu;
