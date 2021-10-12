import * as React from 'react'
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppProps } from 'next/dist/shared/lib/router/router'

export default function MyApp({ Component, pageProps }:AppProps) {
  // React.useEffect(() => {
  //   const jssStyles = document.querySelector('#jss-server-side')
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles)
  //   }
  // }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Wild Riders</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      
      <CssBaseline />
      <Component {...pageProps} />
    </React.Fragment>
  )
}