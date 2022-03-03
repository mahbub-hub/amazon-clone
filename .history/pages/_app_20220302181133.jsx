import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import {store} from './app/store';
import {} from ''

function MyApp({ 
  Component, 
  pageProps: {session, ...pageProps},
 }) {

  return (
    <SessionProvider session={session}>
    <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
