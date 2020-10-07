import "normalize.css";
import "../styles/styles.scss";
import Layout from "../components/layout";
import { FournisseurTheme } from "../hooks/contexteTheme";

function MyApp({ Component, pageProps }) {
  return (
    
      <FournisseurTheme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FournisseurTheme>
    
  );
}

export default MyApp;
