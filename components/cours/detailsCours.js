import styles from "./detailsCours.module.scss";
import {
  FaAddressBook,
  FaAddressCard,
  FaLongArrowAltLeft,
} from "react-icons/fa";

export default function DetailsCours({ infoCours, afficherCours }) {
  return (
    <div className={styles.detailCours}>
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
    </div>
  );
}
