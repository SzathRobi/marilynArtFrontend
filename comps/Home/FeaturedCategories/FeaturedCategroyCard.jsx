import Link from "next/link";
import { Typography } from "@material-ui/core";
import styles from "../../../styles/home/FeaturedCategroyCard.module.css";

function FeaturedCategroyCard({ category, img }) {
  return (
    <Link href="/bolt">
      <div className={styles.featuredCategory}>
        <h2 className={styles.hiddenText}>IRÁNY A BOLT!</h2>
        <Typography className={styles.categoryTitle}>{category}</Typography>
        <img src={img} className={styles.categoryImg} />
      </div>
    </Link>
  );
}

export default FeaturedCategroyCard;
