import '@/styles/globals.css'
import navbar from './components/Navbar'
import styles from '/styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'


export default function App({ Component, pageProps }) {
  // console.log("I am loadiing")
  return <>
  {/* <navbar/> */}

  <Component {...pageProps} />

  </>
  
}



