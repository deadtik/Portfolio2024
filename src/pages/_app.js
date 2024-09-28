import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import {Montserrat} from "next/font/google"
import { useRouter } from 'next/router'
import Head from 'next/head'

/**
 * Montserrat font configuration.
 *
 * @type {Object}
 * @property {string[]} subsets - The subsets of the font.
 * @property {string} variable - The CSS variable for the font.
 */

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return(
   <>

    <Head>
      <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" /> </div>
    </Head>
    <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen `}>
      <NavBar />
      <AnimatePresence>
      <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </main>
   </>
  ) 
}
