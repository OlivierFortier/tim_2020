import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme, useListeThemes } from "../../hooks/ContexteTheme";
import styles from "./futur.module.scss";

export default function Futur() {
  // gestion des couleurs selon le thème
  const theme = useTheme();
  const listeTheme = useListeThemes();

  const [lesStyles, setLesStyles] = useState({
    couleurHover: "#F16242",
    couleurInitiale: "#f3f1f1"
  });

  useEffect(() => {
    switch (theme) {
      case listeTheme.art:
        setLesStyles({
          couleurHover: "#F16242",
          couleurInitiale: "#f3f1f1"
        });
        break;

      case listeTheme.code:
        setLesStyles({
          couleurHover: "#24DC48",
          couleurInitiale: "#f3f1f1"
        });
        break;

      case listeTheme.parent:
        setLesStyles({
          couleurHover: "#4363CA",
          couleurInitiale: "#000000"
        });
        break;

      default:
        setLesStyles({
          couleurHover: "#F16242",
          couleurInitiale: "#f3f1f1"
        });
        break;
    }
  }, [listeTheme.art, listeTheme.code, listeTheme.parent, theme]);

  return (
    <motion.main
      initial={{ y: -200, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      exit={{
        y: 300,
        opacity: 0,
        transition: { duration: 0.7, ease: "easeInOut" }
      }}
      key="lesFuturs"
      className={styles.conteneurPage}
    >
      <Head>
        <title>TIM | Futur</title>
        <meta
          name="Description"
          content="Page qui décrit les opportunités après le DEC: Les stages, les perspectives d'emplois et les universités, aux Techniques d'Intégration Multimédia du Collège Maisonneuve"
        />
        <link rel="canonical" href="https://tim.cmaisonneuve.qc.ca/futur" />
        <meta property="og:title" content="Futur | TIM Maisonneuve" />
        <meta
          property="og:url"
          content="https://tim.cmaisonneuve.qc.ca/futur"
        />
        <meta
          property="og:description"
          content="Page qui décrit les opportunités après le DEC: Les stages, les perspectives d'emplois et les universités, aux Techniques d'Intégration Multimédia du Collège Maisonneuve"
        />
      </Head>
      <div className={styles.fondTexte}>
        <h6>ÉTUDIER DANS L’INDUSTRIE C’EST BIEN PLUS</h6>
      </div>

      <Link href="/futur/perspectives-universitaires">
        <motion.section
          initial={{ color: lesStyles.couleurInitiale }}
          animate={{ color: lesStyles.couleurInitiale }}
          whileHover={{ color: lesStyles.couleurHover }}
          whileTap={{ scale: 1.01 }}
          className={styles.sectionUni}
        >
          <h1>Perspectives universitaires</h1>
          <h3>Poursuivre ses études et approfondir ses connaissances.</h3>
        </motion.section>
      </Link>

      <Link href="/futur/stages">
        <motion.section
          initial={{ color: lesStyles.couleurInitiale }}
          animate={{ color: lesStyles.couleurInitiale }}
          whileHover={{ color: lesStyles.couleurHover }}
          whileTap={{ scale: 1.01 }}
          className={styles.sectionStage}
        >
          <h1>Stages</h1>
          <h3>Mettre en pratique ses apprentissages.</h3>
        </motion.section>
      </Link>

      <Link href="/futur/perspectives-demplois">
        <motion.section
          initial={{ color: lesStyles.couleurInitiale }}
          animate={{ color: lesStyles.couleurInitiale }}
          whileHover={{ color: lesStyles.couleurHover }}
          whileTap={{ scale: 1.01 }}
          className={styles.sectionEmploi}
        >
          <h1>Perspectives d&apos;emploi</h1>
          <h3>Devenir un professionnel dans le domaine.</h3>
        </motion.section>
      </Link>
    </motion.main>
  );
}
