import styles from "./inscription.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Inscription() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.75}}
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
        <meta property="og:url" content="https://tim-2020.vercel.app/inscription" />
        <meta
          property="og:description"
          content="Page d'inscription des Technique d'Intégration Multimédia du Collège Maisonneuve"
        />
      </Head>
      <h1>Qu'est-ce que tu attends ?</h1>
      <Link href="https://www.cmaisonneuve.qc.ca/programme/integration-multimedia/">
        <a>Soumettre ma demande d'admission.</a>
      </Link>
    </motion.main>
  );
}
