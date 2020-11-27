import "normalize.css";
import "react-tabs/style/react-tabs.css";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "../styles/styles.scss";
import Layout from "../components/layout";
import { FournisseurTheme } from "../hooks/contexteTheme";
import { AnimatePresence } from "framer-motion";

import Router from "next/router";

    const routeChange = () => {
      // Temporary fix to avoid flash of unstyled content
      // during route transitions. Keep an eye on this
      // issue and remove this code when resolved:
      // https://github.com/vercel/next.js/issues/17464

      const tempFix = () => {
        const allStyleElems = document.querySelectorAll('style[media="x"]');
        allStyleElems.forEach((elem) => {
          elem.removeAttribute("media");
        });
      };
      tempFix();
    };

   Router.events.on("routeChangeComplete", routeChange );
   Router.events.on("routeChangeStart", routeChange );

function MyApp({ Component, pageProps, router }) {
  return (
    <FournisseurTheme>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route + Math.random() * 100} />
          </AnimatePresence>
        </Layout>
    </FournisseurTheme>
  );
}

export default MyApp;
