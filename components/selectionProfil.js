import { useCookies } from "react-cookie";
import { useListeThemes, useThemeMiseAJour } from "../hooks/contexteTheme";

export default function SelectionProfil({ changerEtape }) {

  //aller chercher les valeurs du thème et pour mettre à jour le thème dans les contextes
  const changerTheme = useThemeMiseAJour();
  const listeThemes = useListeThemes();

  //utiliser le hook des cookies pour mettre le profil dans un cookie
  const [ cookies, setCookie, removeCookie ] = useCookies(['profil']);

  //changer le thème et passer à la prochaine étape
  function choisirTheme(choix) {
    changerTheme(choix);
    //créer le cookie avec le choix du profil
    removeCookie('profil', { path: "/", maxAge: 2592000})
    setCookie('profil', choix, { path: "/", maxAge: 2592000})
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
          <h2 id="rapide">Accéder au site directement</h2>
        </div>
      </div>
      <style jsx>{`
        .conteneur-profils {
          color: white;
          border-left: 3px solid white;
        }

        .grille-profils {
          display: grid;
          grid-template:
            "art . code" 200px
            ". parent ." 200px
            ". . rapide" auto
            / 200px 200px 200px;
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
        }

        #art {
          grid-area: art;
          border-color: #eb601c;
        }

        #code {
          grid-area: code;
          border-color: #34a241;
        }

        #parent {
          grid-area: parent;
          border-color: #c4c4c4;
        }

        #rapide {
          grid-area: rapide;
        }
      `}</style>
    </>
  );
}
