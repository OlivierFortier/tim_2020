import styles from "./nomCours.module.scss";
import { motion } from "framer-motion";
import { useIconeSujet } from "../../hooks/useIcone";

export default function NomCours({ infoCours, afficherCours }) {
  //hook personnalisé pour afficher une icone selont le sujet du cours
  const Icone = useIconeSujet(infoCours.sujetPrincipal[0]);

  return (
    <motion.div
      layout
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 500, opacity: 0 }}
      onClick={afficherCours}
      className={styles.cours}
    >
      <motion.h3 layout className={styles.titreCours}>
        {infoCours.titre}
      </motion.h3>
      {infoCours.choixEntre && <i className={styles.choixEntre}>choix entre {infoCours.choixEntre.titre}</i>}
      <motion.span layout>
        <Icone fontSize="30" className={styles.iconeCours}></Icone>
      </motion.span>
    </motion.div>
  );
}
