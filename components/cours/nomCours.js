import styles from "./nomCours.module.scss";
import { motion } from "framer-motion";
import { useIcone } from "../../hooks/useNomIcone";

export default function NomCours({ infoCours, afficherCours }) {
  //hook personnalisé pour afficher une icone selont le sujet du cours
  const Icone = useIcone(infoCours.sujetPrincipal[0]);

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
      {infoCours.choixEntre && <i>choix entre {infoCours.choixEntre.titre}</i>}
      <motion.span layout>
        <Icone fontSize="30"></Icone>
      </motion.span>
    </motion.div>
  );
}
