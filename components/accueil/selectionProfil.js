import { useCookies } from "react-cookie";
import { useListeThemes, useThemeMiseAJour } from "../../hooks/contexteTheme";

export default function SelectionProfil({ changerEtape }) {
  //aller chercher les valeurs du thème et pour mettre à jour le thème dans les contextes
  const changerTheme = useThemeMiseAJour();
  const listeThemes = useListeThemes();

  //utiliser le hook des cookies pour mettre le profil dans un cookie
  const [cookies, setCookie, removeCookie] = useCookies(["profil"]);

  //changer le thème et passer à la prochaine étape
  function choisirTheme(choix) {
    changerTheme(choix);
    //créer le cookie avec le choix du profil
    removeCookie("profil", { path: "/", maxAge: 2592000 });
    setCookie("profil", choix, { path: "/", maxAge: 2592000 });
    changerEtape("accueil");
  }

  return (
    <>
      <div className="conteneur-profils">
        <h1>Sélectionnez votre profil</h1>
        <div className="grille-profils">
          <span onClick={() => choisirTheme(listeThemes.art)} id="art">
            <h2>Artiste Digital</h2>
          </span>
          <span onClick={() => choisirTheme(listeThemes.code)} id="code">
            <h2>
              Pirate <br /> Informatique
            </h2>
          </span>
          <span onClick={() => choisirTheme(listeThemes.parent)} id="parent">
            <h2>Parent</h2>
          </span>
          
        </div>
        <h2 id="rapide">Accéder au site directement</h2>
      </div>
      <style jsx>{`

      @import "styles/variables";

        .conteneur-profils {
          color: white;
          border-left: 3px solid white;

          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          h1 {
            align-self: start;
            padding-left: 2%;
          }

        }

        .grille-profils {
          display: grid;
          grid-template:
            "art . code" 280px
            ". parent ." 280px
            / auto auto auto;
        }

        #art,
        #code,
        #parent {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          border: 2px solid red;
          text-align: center;
          width: $taille-cercle-accueil;
          height: $taille-cercle-accueil;
          position: relative;
        }

        #art {
          grid-area: art;
          border-color: #eb601c;
          top: 25%;
        }

        #code {
          grid-area: code;
          border-color: #fff;
          right: 35%;
          bottom: 0%;
        }

        #parent {
          grid-area: parent;
          border-color: #fff;
          top: -5%;
        }

        #rapide {
          grid-area: rapide;
          font-size: 1.3rem;
          font-weight: normal;
          text-decoration: underline;
          position: relative;
          right: 1rem;
          height: 0;
          align-self: flex-end;
        }
      `}</style>
    </>
  );
}
