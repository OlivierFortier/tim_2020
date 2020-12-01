import styles from "./inscription.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Inscription() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
      key="inscription"
      className={styles.conteneurPage}
    >
      <Head>
        <title>TIM | Inscription</title>
        <meta charset="UTF-8"></meta>
        <meta
          name="Description"
          content="Page d'inscription des Techniques d'Intégration Multimédia du Collège Maisonneuve"
        ></meta>
        <link
          rel="canonical"
          href="https://tim-2020.vercel.app/inscription"
        ></link>
        <meta property="og:title" content="Inscription | TIM Maisonneuve" />
        <meta
          property="og:url"
          content="https://tim-2020.vercel.app/inscription"
        />
        <meta
          property="og:description"
          content="Page d'inscription des Technique d'Intégration Multimédia du Collège Maisonneuve"
        />
      </Head>
      <motion.h1 initial={{y: -100}} animate={{y: 0}} transition={{duration: 0.75}}>Qu'est-ce que tu attends ?</motion.h1>

      <a
        href="https://www.cmaisonneuve.qc.ca/programme/integration-multimedia/"
        target="_blank"
      >
        Soumettre ma demande d'admission.
      </a>
    </motion.main>
  );
}
