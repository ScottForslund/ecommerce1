import "../styles/globals.css";
import { CartProvider } from "../components/Cart";
import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Navigation />
      <Component {...pageProps} />
    </CartProvider>
  );
}
