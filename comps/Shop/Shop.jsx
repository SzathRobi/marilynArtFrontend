import React, { useEffect } from "react";
import SearchMenu from "./SearchMenu/SearchMenu";
import ShopLanding from "./ShopLanding/ShopLanding";
import Products from "./Products/Products";


import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    position: "relative",
    top: 60
  }
});

const Shop = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.root}>
      <ShopLanding />
      <div>
        <SearchMenu />
        <Products />
      </div>
      
    </div>
  );
};

export default Shop;
