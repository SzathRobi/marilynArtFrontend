import Layout from "../comps/Layout"
import { parseCookies } from "nookies"
import ContextWrapper from "../comps/ContextWrapper"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <ContextWrapper>
        <Component {...pageProps} />
      </ContextWrapper>
    </Layout>
  )
}

export default MyApp
