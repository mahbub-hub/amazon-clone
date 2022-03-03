import '../styles/globals.css'
import { Provider as AuthProvider } from "next-auth/client"

function MyApp({ Component, pageProps}) {

  return (
    <AuthProvider session={pageProps.se}>
    <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
