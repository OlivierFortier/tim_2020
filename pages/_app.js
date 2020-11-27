import "normalize.css";
import "../styles/styles.scss";
import "react-tabs/style/react-tabs.css";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import Layout from "../components/layout";
import { FournisseurTheme } from "../hooks/contexteTheme";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import {FournisseurScroll} from "../hooks/contexteScroll"

function MyApp({ Component, pageProps, router }) {
  return (
    <FournisseurTheme>
      <FournisseurScroll>
          <Layout>
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route + Math.random()*100} />
            </AnimatePresence>
          </Layout>
      </FournisseurScroll>
    </FournisseurTheme>
  );
}

export default MyApp;
