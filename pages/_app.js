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

function redirectUser(ctx, location) {
  if (ctx.req) {
      ctx.res.writeHead(302, { Location: location });
      ctx.res.end();
  } else {
      Router.push(location);
  }
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  let pageProps = {}
  const jwt = parseCookies(ctx).jwt


  if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
  }

  if (!jwt) {
      if (ctx.pathname === "/bolt") {
          redirectUser(ctx, "/login");
      }
  }

  return {
      pageProps
  }
}

export default MyApp
