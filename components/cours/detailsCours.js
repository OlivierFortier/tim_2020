import styles from "./detailsCours.module.scss"

export default function DetailsCours({infoCours, afficherCours}) {
    return (
      <div className={styles.detailCours}>
        <button onClick={afficherCours}>
          retour aux autres cours
        </button>
        <p>{infoCours.description}</p>
      </div>
    );
}