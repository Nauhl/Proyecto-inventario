import '../../styles/globals.css'
import Header from "../../components/header";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp // is where I put everything I wants to show in every page 
