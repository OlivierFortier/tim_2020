import 'normalize.css';
import 'react-tabs/style/react-tabs.css';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import '../styles/styles.scss';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

// import Router from 'next/router';
import { FournisseurTheme } from '../hooks/contexteTheme';
import Layout from '../components/layout';
import { useTransitionFix } from '../hooks/useTransitionFix.ts';

// const routeChange = () => {
//   // Temporary fix to avoid flash of unstyled content
//   // during route transitions. Keep an eye on this
//   // issue and remove this code when resolved:
//   // https://github.com/vercel/next.js/issues/17464

//   const tempFix = () => {
//     const allStyleElems = document.querySelectorAll('style[media="x"]');
//     allStyleElems.forEach((elem) => {
//       elem.removeAttribute('media');
//     });
//   };
//   tempFix();
// };

// Router.events.on('routeChangeComplete', routeChange);
// Router.events.on('routeChangeStart', routeChange);

function MyApp({ Component, pageProps, router }) {
  const transitionCallback = useTransitionFix();

  return (
    <FournisseurTheme>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route + Math.random() * 100} />
        </AnimatePresence>
      </Layout>
    </FournisseurTheme>
  );
}

export default MyApp;
