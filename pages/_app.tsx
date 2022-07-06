import type { AppProps } from "next/app";
import Template from "../components/layout/Template";
import { ParallaxProvider } from "react-scroll-parallax";
import { ScrollYContextProvider } from "context/ScrollYContext";
import { ThemeContextProvider } from "context/ThemeContext";
import "/sass/style.scss";
/*  cSpell:locale fr,en */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Template>
        <Component {...pageProps} />
      </Template>
    </ThemeContextProvider>
  );
}

export default MyApp;
