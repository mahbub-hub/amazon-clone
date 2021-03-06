import '../styles/globals.css'
import { Provider as AuthProvider } from "next-auth/client"

function MyApp({ Component, pageProps}) {

  return (
    <AuthProvider
    <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
