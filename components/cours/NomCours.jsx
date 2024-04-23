import { motion } from "framer-motion";
import styles from "./nomCours.module.scss";
import { GetIconeSujet } from "../../hooks/Icones";

export default function NomCours({ infoCours, afficherCours, couleurBordure }) {
  // hook personnalisé pour afficher une icone selont le sujet du cours
  const Icone = GetIconeSujet(infoCours.sujetPrincipal[0]);

  return (
    <motion.div
      layout
      initial={{ x: 7, opacity: 0, transition: { ease: "linear" } }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -0.5, opacity: 0 }}
      whileHover={{ x: -4, transition: { duration: 0.3 } }}
      onClick={afficherCours}
      className={styles.cours}
      style={{ borderColor: couleurBordure }}
    >
      <motion.h3 layout className={styles.titreCours}>
        {infoCours.titre}
      </motion.h3>
      {infoCours.choixEntre && (
        <i
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontFamily: "Montserrat"
          }}
          className={styles.choixEntre}
        >
          choix entre {infoCours.choixEntre.titre}
        </i>
      )}
      <motion.span layout>
        <Icone fontSize="30" className={styles.iconeCours} />
      </motion.span>
    </motion.div>
  );
}
