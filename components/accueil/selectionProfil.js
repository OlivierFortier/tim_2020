import { useCookies } from 'react-cookie';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useListeThemes, useThemeMiseAJour } from '../../hooks/contexteTheme';
import styles from './selectionProfil.module.scss';

export default function SelectionProfil({ changerEtape }) {
  useEffect(() => {
    document.querySelector('#header-site').style.display = 'flex';
    document.querySelector('#racine').style.overflowY = 'auto';
  }, []);

  // aller chercher les valeurs du thème et pour mettre à jour le thème dans les contextes
  const changerTheme = useThemeMiseAJour();
  const listeThemes = useListeThemes();

  // utiliser le hook des cookies pour mettre le profil dans un cookie
  const [cookies, setCookie, removeCookie] = useCookies(['profil']);

  // changer le thème et passer à la prochaine étape
  function choisirTheme(choix) {
    changerTheme(choix);
    // créer le cookie avec le choix du profil
    removeCookie('profil', { path: '/', maxAge: 2592000 });
    setCookie('profil', choix, { path: '/', maxAge: 2592000 });
    changerEtape('accueil');
  }

  function numAlea(min, max) {
    return Math.random() * (max - min) + min;
  }

  return (
    <>
      <motion.div
        layout
        initial={{
          x: 200,
          opacity: 0,
          transition: { ease: 'easeIn' },
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: 'easeInOut' },
        }}
        exit={{
          opacity: 0,
          x: -20,
          transition: { duration: 0.4, ease: 'linear' },
        }}
        className={styles.conteneurProfils}
      >
        <h1>Sélectionnez votre profil</h1>
        <div className={styles.grilleProfils}>
          <motion.span
            initial={{
              filter: 'hue-rotate(0deg)',
            }}
            animate={{
              filter: [
                `hue-rotate(${numAlea(1, 50)}deg)`,
                `hue-rotate(${numAlea(50, 100)}deg)`,
                `hue-rotate(${numAlea(100, 200)}deg)`,
                `hue-rotate(${numAlea(200, 300)}deg)`,
              ],
              transition: {
                repeat: 'Infinity',
                repeatDelay: 0.1,
                repeatType: 'mirror',
                duration: 4,
                damping: 200,
              },
            }}
            whileHover={{
              scale: 1.05,
              x: 5,
              y: 5,
              transition: { duration: 0.2 },
            }}
            onClick={() => choisirTheme(listeThemes.art)}
            className={styles.art}
          >
            <h2>Artiste Numérique</h2>
          </motion.span>
          <motion.span
            initial={{
              filter: 'hue-rotate(0deg)',
            }}
            animate={{
              filter: [
                `hue-rotate(${numAlea(1, 50)}deg)`,
                `hue-rotate(${numAlea(50, 100)}deg)`,
                `hue-rotate(${numAlea(100, 200)}deg)`,
                `hue-rotate(${numAlea(200, 300)}deg)`,
              ],
              transition: {
                repeat: 'Infinity',
                repeatDelay: 0.1,
                repeatType: 'mirror',
                duration: 4,
                damping: 200,
              },
            }}
            whileHover={{
              scale: 1.05,
              x: 5,
              y: 5,
              transition: { duration: 0.2 },
            }}
            onClick={() => choisirTheme(listeThemes.code)}
            className={styles.code}
          >
            <h2>Logique</h2>
          </motion.span>
          <motion.span
            initial={{
              filter: 'hue-rotate(0deg)',
            }}
            animate={{
              filter: [
                `hue-rotate(${numAlea(1, 50)}deg)`,
                `hue-rotate(${numAlea(50, 100)}deg)`,
                `hue-rotate(${numAlea(100, 200)}deg)`,
                `hue-rotate(${numAlea(200, 300)}deg)`,
              ],
              transition: {
                repeat: 'Infinity',
                repeatDelay: 0.05,
                repeatType: 'mirror',
                duration: 4,
                damping: 200,
              },
            }}
            whileHover={{
              scale: 1.05,
              x: 5,
              y: 5,
              transition: { duration: 0.2 },
            }}
            onClick={() => choisirTheme(listeThemes.parent)}
            className={styles.parent}
          >
            <h2>Parent</h2>
          </motion.span>
        </div>
        <h2
          className={styles.rapide}
          onClick={() => choisirTheme(listeThemes.parent)}
        >
          Accéder au site directement
        </h2>
      </motion.div>
    </>
  );
}
