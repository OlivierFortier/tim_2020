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
      className={styles.conteneurPage}
      layout
      key={Math.random() * 100}
    >
      <Head>
        <title>TIM | Inscription</title>
        <meta charset="UTF-8"></meta>
        <meta
          name="Description"
          content="Page d'inscription de la technique d'Intégration Multimédia du collège Maisonneuve"
        ></meta>
        <link
          rel="canonical"
          href="https://tim-2020.vercel.app/inscription"
        ></link>
      </Head>
      <h1>Qu'est-ce que tu attends ?</h1>
      <Link scroll={false} href="https://admission.sram.qc.ca/">
        <a>Soumettre ma demande d'admission.</a>
      </Link>
    </motion.main>
  );
}
