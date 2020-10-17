import "normalize.css";
import "../styles/styles.scss";
import "react-tabs/style/react-tabs.css";
import Layout from "../components/layout";
import { FournisseurTheme } from "../hooks/contexteTheme";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <FournisseurTheme>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </FournisseurTheme>
  );
}

export default MyApp;
