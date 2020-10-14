import styles from "./nomCours.module.scss";

export default function NomCours({ infoCours, afficherCours }) {
  //TODO : gestion de l'icone selon le type du cours

  return (
    <div onClick={afficherCours} className={styles.cours}>
      <h3 className={styles.titreCours}>{infoCours.titre}</h3>
      {infoCours.choixEntre && <i>choix entre {infoCours.choixEntre.titre}</i>}
      <span>
        <ul className={styles.listeTypes}>
          {infoCours.types &&
            infoCours.types.map((type, index) => {
              return <li key={Math.random() * index}>{type}</li>;
            })}
        </ul>
      </span>
    </div>
  );
}
