// import * as React from 'react'
// import Head from 'next/head'
// import CssBaseline from '@material-ui/core/CssBaseline'
// import { AppProps } from 'next/dist/shared/lib/router/router'

// export default function MyApp({ Component, pageProps }:AppProps) {
//   // React.useEffect(() => {
//   //   const jssStyles = document.querySelector('#jss-server-side')
//   //   if (jssStyles) {
//   //     jssStyles.parentElement.removeChild(jssStyles)
//   //   }
//   // }, [])

//   return (
//     <React.Fragment>
//       <Head>
//         <title>Wild Riders</title>
//         <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
//       </Head>
      
//       <CssBaseline />
//       <Component {...pageProps} />
//     </React.Fragment>
//   )
// }

import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};