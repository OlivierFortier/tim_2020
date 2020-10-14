import styles from "./detailsCours.module.scss";
import {
  FaAddressBook,
  FaAddressCard,
  FaLongArrowAltLeft,
} from "react-icons/fa";
import {motion} from "framer-motion"

export default function DetailsCours({ infoCours, afficherCours }) {
  return (
    <motion.div layout initial={{x: 500, opacity:0}} animate={{x:0, opacity:1}} exit={{x:-500, opacity:0}} className={styles.detailCours}>
      <h2 onClick={afficherCours}>
        <FaLongArrowAltLeft
          onClick={afficherCours}
          className={styles.boutonFleche}
        />
        Retour aux autres cours
      </h2>

      <div className={styles.contenuDetailCours}>
        <div className={styles.conteneurTitre}>
          <h3>{infoCours.titre}</h3>
          <div className={styles.conteneurIcones}>
            {/* ajouter les icones dynamiquement */}
            <FaAddressBook fontSize="50"></FaAddressBook>
            <FaAddressCard fontSize="50"></FaAddressCard>
          </div>
        </div>
        <span className={styles.descriptionCours}>
          <p>{infoCours.description}</p>
        </span>
      </div>
    </motion.div>
  );
}
