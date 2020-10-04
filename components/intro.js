import { useEffect, useRef, useState } from "react";

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
      <div>
        <h1>TECHNIQUES D'INTÉGRATION MULTIMÉDIA</h1>
        <img src="/intro-logo-tim.svg" />
        <h2>Votre expérience unique commence dès maintenant...</h2>
        <h2>{chargement}%</h2>
        {chargement === 100 && <button onClick={()=> changerEtape("profil")}>Entrez</button>}
      </div>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
        }
      `}</style>
    </>
  );
}
