import { Button, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Link from "next/link";
import ProductCard from "../../Shop/Products/ProductCard/ProductCard";
import styles from "../../../styles/home/OnSale.module.css";

function OnSale({ onSaleProducts }) {
  const CardBtn = {
    width: 200,
    fontWeight: 600,
    color: "#f44336",
    border: `2px solid #f44336`,
    margin: "2rem auto 1rem 50%",
    transform: "translateX(-50%)",
  };

  const sliderWith = {
    width: `calc(300px * ${onSaleProducts.length})`,
  };
  return (
    <div className={styles.root}>
      <Typography className={styles.title} variant="h3">
        Akciós Termékek
      </Typography>
      <div className={styles.slider}>
        <div className={styles.slideTrack} style={sliderWith}>
          {onSaleProducts.map((onSaleProduct) => (
            <ProductCard product={onSaleProduct} />
          ))}
        </div>
        <Link href="/bolt">
          <a>
            <Button style={CardBtn} endIcon={<ArrowForwardIcon />}>
              MUTASS TÖBBET
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default OnSale;
