import "normalize.css";
import { CookiesProvider } from "react-cookie";
import Layout from "../components/layout";
import { FournisseurTheme } from "../hooks/contexteTheme";

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <FournisseurTheme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FournisseurTheme>
    </CookiesProvider>
  );
}

export default MyApp;
