import { useEffect, useState } from "react";
import styles from "./intro.module.scss"

export default function Intro({ changerEtape }) {
  //variables pour le faux chargement
  const [chargement, setChargement] = useState(0);

  //faux chargement
  useEffect(() => {
    if (chargement === 100) return () => clearInterval(intervalle);

    const intervalle = setInterval(() => {
      setChargement((ancienChargement) => ancienChargement + 1);
    }, 10);
    return () => clearInterval(intervalle);
  }, [chargement]);

  return (
    <>
      <div className={styles.intro}>
        <h1>TECHNIQUES D'INTÉGRATION MULTIMÉDIA</h1>
        <img src="images/intro-logo-tim.svg" />
        <h2 className={styles.texteIntro}>Votre expérience unique commence dès maintenant...</h2>
        {chargement !== 100 && <h2 className={styles.texteChargement}>{chargement}%</h2>}
        {chargement === 100 && <h2 className={`${styles.texteChargement} ${styles.souligne}`} onClick={()=> changerEtape("profil")}>Entrez</h2>}
      </div>
    </>
  );
}
