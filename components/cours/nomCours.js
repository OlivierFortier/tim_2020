import styles from "./nomCours.module.scss";
import {motion} from "framer-motion"

export default function NomCours({ infoCours, afficherCours }) {
  //TODO : gestion de l'icone selon le type du cours

  

  return (
    <motion.div layout initial={{x: -500, opacity:0}} animate={{x:0, opacity:1}} exit={{x:500, opacity:0}} onClick={afficherCours} className={styles.cours}>
      <motion.h3 layout className={styles.titreCours}>{infoCours.titre}</motion.h3>
      {infoCours.choixEntre && <i>choix entre {infoCours.choixEntre.titre}</i>}
      <motion.span layout>
        <ul className={styles.listeTypes}>
          {infoCours.typesSecondaires &&
            infoCours.typesSecondaires.map((type, index) => {
              return <li key={Math.random() * index}>{type}</li>;
            })}
        </ul>
      </motion.span>
    </motion.div>
  );
}
