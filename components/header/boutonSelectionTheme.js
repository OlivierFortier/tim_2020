import { useCookies } from 'react-cookie';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useProxy } from 'valtio';
import styles from './boutonSelectionTheme.module.scss';
import {
  useListeThemes,
  useTheme,
  useThemeMiseAJour,
} from '../../hooks/contexteTheme';
import { etatMenu } from '../etat_global/EtatMenu';

export default function BoutonSelectionTheme() {
  const changerTheme = useThemeMiseAJour();
  const listeThemes = useListeThemes();
  const theme = useTheme();

  const [cookies, setCookie, removeCookie] = useCookies(['profil']);

  const tableauTheme = [listeThemes.art, listeThemes.code, listeThemes.parent];

  // gestions de changement de thèmes (passer d'un thème à l'autre)
  const [indexTableau, setIndexTableau] = useState(tableauTheme.indexOf(theme));

  function mettreAjourTheme() {
    if (indexTableau > 2) {
      setIndexTableau(0);
    }
    changerTheme(tableauTheme[indexTableau]);
    removeCookie('profil', { path: '/', maxAge: 2592000 });
    setCookie('profil', tableauTheme[indexTableau], {
      path: '/',
      maxAge: 2592000,
    });
  }

  useEffect(() => {
    if (Object.keys(cookies).length != 0) {
      mettreAjourTheme();
    }
  }, [indexTableau]);

  // obtenir l'état du menu pour rendre la couleur du bouton visible
  const snapShot = useProxy(etatMenu);

  // gestion couleurs themes
  const [couleursTheme, setCouleurThemes] = useState({
    classeInverser: styles.inverser,
  });

  useEffect(() => {
    switch (theme) {
      case listeThemes.art:
        setCouleurThemes({
          classeInverser: styles.inverser,
        });
        break;

      case listeThemes.code:
        setCouleurThemes({
          classeInverser: styles.inverser,
        });
        break;

      case listeThemes.parent:
        setCouleurThemes({
          classeInverser: '',
        });
        if (snapShot.menuEstOuvert)
          setCouleurThemes({ classeInverser: styles.inverser });
        break;

      default:
        setCouleurThemes({
          classeInverser: styles.inverser,
        });
        break;
    }
  }, [theme, snapShot.menuEstOuvert]);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        onClick={() => setIndexTableau((aI) => aI + 1)}
        style={{ cursor: 'pointer' }}
      >
        <Image
          src="/images/Logo_TIM.png"
          width={57}
          height={26}
          quality={5}
          alt="Logo des Techniques d'Intégration Multimédia du Collège Maisonneuve"
          className={`${styles.logo}  ${couleursTheme.classeInverser}`}
        />
      </motion.div>
    </>
  );
}
