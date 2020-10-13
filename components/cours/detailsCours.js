import styles from "./detailsCours.module.scss";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function DetailsCours({ infoCours, afficherCours }) {
  return (
    <div className={styles.detailCours}>
      <div>
        <FaLongArrowAltLeft
          onClick={afficherCours}
          className={styles.boutonFleche}
        ></FaLongArrowAltLeft>
        <button onClick={afficherCours}>Retour aux autres cours</button>
      </div>
      <div className={styles.contenuDetailCours}>
        <p>
          blablabla Conception graphique et imagerie matricelle et les deux
          logos...........................................
          {infoCours.description}
        </p>
        <p className={styles.descriptionCours}>{infoCours.description}</p>
      </div>
    </div>
  );
}
