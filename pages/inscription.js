import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from './inscription.module.scss';
import { useListeThemes, useTheme } from '../hooks/contexteTheme';

export default function Inscription() {
  // gestion du thème de couleurs
  const theme = useTheme();
  const listeTheme = useListeThemes();

  const [lesStyles, setLesStyles] = useState({
    couleurHover: '#F16242',
    couleurInitiale: '#f3f1f1',
  });

  useEffect(() => {
    switch (theme) {
      case listeTheme.art:
        setLesStyles({
          couleurHover: '#F16242',
          couleurInitiale: '#f3f1f1',
        });
        break;

      case listeTheme.code:
        setLesStyles({
          couleurHover: '#24DC48',
          couleurInitiale: '#f3f1f1',
        });
        break;

      case listeTheme.parent:
        setLesStyles({
          couleurHover: '#4363CA',
          couleurInitiale: '#000000',
        });
        break;

      default:
        setLesStyles({
          couleurHover: '#F16242',
          couleurInitiale: '#f3f1f1',
        });
        break;
    }
  }, [theme]);

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
        <meta charset="UTF-8" />
        <meta
          name="Description"
          content="Page d'inscription des Techniques d'Intégration Multimédia du Collège Maisonneuve"
        />
        <link rel="canonical" href="https://tim-2020.vercel.app/inscription" />
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
      <motion.h1
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.75 }}
      >
        Qu'est-ce que tu attends ?
      </motion.h1>

      <motion.a
        initial={{ color: lesStyles.couleurInitiale }}
        animate={{ color: lesStyles.couleurInitiale }}
        whileHover={{ color: lesStyles.couleurHover }}
        href="https://admission.sram.qc.ca/"
        target="_blank"
      >
        Soumettre ma demande d'admission.
      </motion.a>
    </motion.main>
  );
}
