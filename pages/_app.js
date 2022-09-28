import '../styles/globals.css'
import {storyblokInit, apiPlugin } from '@storyblok/react';
storyblokInit({
  accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin]
})
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
