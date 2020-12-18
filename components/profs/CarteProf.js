import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './CarteProf.module.scss';
import { useListeThemes, useTheme } from '../../hooks/contexteTheme';

export default function CarteProf({ prof }) {
  // gestion des couleurs selont le thème
  const theme = useTheme();
  const listeThemes = useListeThemes();

  const [lesStyles, setLesStyles] = useState({
    classeFiltre: styles.unProfArt,
  });

  useEffect(() => {
    switch (theme) {
      case listeThemes.art:
        setLesStyles({
          classeFiltre: styles.unProfArt,
        });
        break;

      case listeThemes.code:
        setLesStyles({
          classeFiltre: styles.unProfCode,
        });
        break;

      case listeThemes.parent:
        setLesStyles({
          classeFiltre: styles.unProf,
        });
        break;

      default:
        setLesStyles({
          classeFiltre: styles.unProfArt,
        });
        break;
    }
  }, [theme]);

  return (
    <Link href={`/professeurs/${prof.slug}`}>
      <a>
        <motion.div
          whileHover={{ scale: 1.013 }}
          className={lesStyles.classeFiltre}
        >
          {prof?.photo?.url ? (
            <Image
              unsized
              layout="fill"
              src={prof?.photo?.url}
              loading="lazy"
              quality={1}
              className={styles.imgProf}
              alt={`photo de ${prof.nom}`}
            />
          ) : (
            <Image
              quality={1}
              src="/images/cam.jpg"
              loading="lazy"
              className={styles.imgProf}
              alt={`photo de ${'placeholder'}`}
            />
          )}
          <h3 className={styles.nomProf}>{prof.nom}</h3>
        </motion.div>
      </a>
    </Link>
  );
}
