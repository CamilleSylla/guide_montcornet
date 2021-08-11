import Nav from "../components/Navbar/navbar";
import { NavigationProvider} from "../context/navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NavigationProvider>
      <Nav/>
      <Component {...pageProps} />
    </NavigationProvider>
  );
}

export default MyApp;
