import '../../styles/globals.css'
import Header from "../../components/header";
import theme from "../../utils/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp // is where I put everything I wants to show in every page 
