import FeaturedCategroyCard from "./FeaturedCategroyCard"
import styles from "../../../styles/home/FeaturedCategories.module.css"

function FeaturedCategories() {
  return (
    <div className={styles.featuredCategories}>
      <FeaturedCategroyCard category={"CATEGORY"} img={"/citrine.jpg"} gridArea={"categ1"}/>
      <FeaturedCategroyCard category={"CATEGORY"} img={"/necklace.png"} gridArea={"categ2"}/>
      <FeaturedCategroyCard category={"CATEGORY"} img={"/ametist2.jpg"} gridArea={"categ3"}/>
      <FeaturedCategroyCard category={"CATEGORY"} img={"/ametist.jpg"} gridArea={"categ4"}/>
    </div>
  )
}

export default FeaturedCategories
