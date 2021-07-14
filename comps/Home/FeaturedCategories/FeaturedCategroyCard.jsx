import Link from "next/link";
import { useContext } from "react";
import { Typography } from "@material-ui/core";
import MarilynContext from "../../../contexts/MarilynContext";
import styles from "../../../styles/home/FeaturedCategroyCard.module.css";

function FeaturedCategroyCard({ category, img }) {
  const { setCategoryTab } = useContext(MarilynContext);

  const filterProducts = () => {
    setCategoryTab(category);
  };
  return (
    <Link href="/bolt">
      <a onClick={filterProducts}>
        <div className={styles.featuredCategory}>
          <h2 className={styles.hiddenText}>IRÁNY A BOLT!</h2>
          <Typography className={styles.categoryTitle}>{category}</Typography>
          <img src={img} className={styles.categoryImg} />
        </div>
      </a>
    </Link>
  );
}

export default FeaturedCategroyCard;
