import '../styles/globals.css'
import { Provider } from "next-auth/client"

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
