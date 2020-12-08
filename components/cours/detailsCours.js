import { motion } from 'framer-motion';
import Markdown from 'markdown-to-jsx';
import styles from './detailsCours.module.scss';
import { useIconeTechnos } from '../../hooks/useIcone';

export default function DetailsCours({
  infoCours,
  afficherCours,
  couleurIcones,
}) {
  // hook d'icones qui nous donne une icone selon les technologies utilisées
  const Icones =
    infoCours.logicielsEtTechnologies &&
    useIconeTechnos(infoCours.logicielsEtTechnologies);

  return (
    <motion.div
      layout
      initial={{ y: -5, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { ease: 'easeInOut', duration: 0.3 },
      }}
      exit={{ opacity: 0, transition: { ease: 'easeInOut', duration: 0.7 } }}
      className={styles.detailCours}
    >
      <motion.h2
        whileTap={{ transition: { duration: 0.7, ease: 'linear' } }}
        onClick={afficherCours}
      >
        Retour
      </motion.h2>

      <div className={styles.contenuDetailCours}>
        <div className={styles.conteneurTitre}>
          <h3>{infoCours.titre}</h3>
          <div className={styles.conteneurIcones}>
            {Icones &&
              Icones.map((Icone, index) => (
                <Icone
                  key={index}
                  style={{
                    color: couleurIcones,
                    paddingLeft: '0.5%',
                    paddinRight: '0.5%',
                  }}
                  fontSize="30"
                />
              ))}
          </div>
        </div>
        <span className={styles.descriptionCours}>
          <Markdown className={styles.paragrapheCours}>
            {infoCours.description}
          </Markdown>
        </span>
        <div className={styles.fleche} />
      </div>
    </motion.div>
  );
}
