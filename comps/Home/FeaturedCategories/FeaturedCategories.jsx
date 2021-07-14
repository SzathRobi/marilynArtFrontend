import { useContext } from "react";
import MarilynContext from "../../../contexts/MarilynContext";
import FeaturedCategroyCard from "./FeaturedCategroyCard";
import styles from "../../../styles/home/FeaturedCategories.module.css";

function FeaturedCategories() {
  const { categories } = useContext(MarilynContext);
  console.log("categories:", categories);

  const test = [
    "/smoke.jpg",
    "/citrine.jpg",
    "/bracelet.png",
    "ametistNecklace.jpg",
  ];

  return (
    <div className={styles.featuredCategories}>
      {categories.map((category, index) => (
        <FeaturedCategroyCard
          key={category.name}
          category={category.name}
          img={test[index]}
        />
      ))}
    </div>
  );
}

export default FeaturedCategories;
