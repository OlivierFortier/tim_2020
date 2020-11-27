import styles from "./futur.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";

import Link from "next/link";

export default function Futur() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.conteneurPage}
      key={Math.random() * 100}
      layout
    >
      <Head>
        <title>TIM | Futur</title>
        <meta charset="UTF-8"></meta>
        <meta
          name="Description"
          content="Page qui décrit les opportunités après le DEC: Les stages, les perspectives d'emplois et les universités."
        ></meta>
        <link rel="canonical" href="https://tim-2020.vercel.app/futur"></link>
      </Head>
      <div className={styles.fondTexte}>
        <h6>ÉTUDIER DANS L’INDUSTRIE C’EST BIEN PLUS</h6>
      </div>

      <Link scroll={false} href="/futur/perspectives-universitaires">
        <section className={styles.sectionUni}>
          <h1>Perspective universitaire</h1>
          <h3>Poursuivre ses études et approfondir ses connaissances.</h3>
        </section>
      </Link>

      <Link scroll={false} href="/futur/stages">
        <section className={styles.sectionStage}>
          <h1>Stages</h1>
          <h3>Mettre en pratique ses apprentissages.</h3>
        </section>
      </Link>

      <Link scroll={false} href="/futur/perspectives-demplois">
        <section className={styles.sectionEmploi}>
          <h1>Perspectives d'emploi</h1>
          <h3>Devenir un professionnel dans le domaine.</h3>
        </section>
      </Link>
    </motion.main>
  );
}
