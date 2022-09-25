import Head from 'next/head'
import LayoutComponent from '../components/layout/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <LayoutComponent>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <Component {...pageProps} />
  </LayoutComponent>
}

export default MyApp
