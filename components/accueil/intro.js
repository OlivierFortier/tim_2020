import { useEffect, useState } from "react";

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
        <img src="images/intro-logo-tim.svg" />
        <h2 className="texte-intro">Votre expérience unique commence dès maintenant...</h2>
        {chargement !== 100 && <h2 className="texte-chargement">{chargement}%</h2>}
        {chargement === 100 && <h2 className="texte-chargement souligne" onClick={()=> changerEtape("profil")}>Entrez</h2>}
      </div>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          margin-top: 5%;
        }

        h1 {
          font-weight: normal;
          font-size: 24px;
        }

        img {
          margin: 10% 0;
        }

        .texte-intro {
          font-weight: 500;
          font-size: 18px;
        }

        .texte-chargement {
          font-family: NeueMontreal;
          font-weight: bold;
          font-size: 18px;
        }

        .souligne {
          text-decoration: underline;
          cursor: pointer;
        }

      `}</style>
    </>
  );
}
