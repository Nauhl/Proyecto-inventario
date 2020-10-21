import '../../styles/globals.css'
import Navbar from "../../components/NavBar";
import theme from "../../utils/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp // is where I put everything I wants to show in every page 