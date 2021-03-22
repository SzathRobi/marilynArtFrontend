import Head from 'next/head'
import Landing from "../comps/Home/Landing/Landing"
import Popular from "../comps/Home/Popular/Popular"
import BestOf from "../comps/Home/BestOf/BestOf"
import styles from '../styles/home/Home.module.css'
import FeaturedCategories from '../comps/Home/FeaturedCategories/FeaturedCategories'
import OnSale from '../comps/Home/OnSale/OnSale'

function Home({products, onSaleProducts, featuredProducts}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
      <FeaturedCategories />
      <OnSale onSaleProducts={onSaleProducts}/>
      <Popular featuredProducts={featuredProducts}/>
    </div>
  )
}

export async function getStaticProps() {
  const product_res = await fetch(`https://marilynart-backend.herokuapp.com/products`)
  const products = await product_res.json()
  const onSaleProducts = products.filter(product => product.onSale === true)
  const featuredProducts = products.filter(product => product.FeaturedProduct === true)
  

  return {
    props: {
        products,
        onSaleProducts,
        featuredProducts
    }
  }
}


export default Home