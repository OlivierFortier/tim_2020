import { useListeThemes, useTheme } from "../hooks/contexteTheme";
import EnTete from "./enTete";

export default function Layout({ children }) {

  //grace au thème, on peut changer le css dynamiquement avec javascript selon le thème choisi
  const theme = useTheme()
  const listeThemes = useListeThemes()

  let styles = {}

  //selon le thème actif, on change la couleur du bg par exemple
  if(theme === listeThemes.art) {
    styles = {
      couleurBg : '#110c12'
    }
  }
  if(theme === listeThemes.code) {
    styles = {
      couleurBg : '#110c12'
    }
  }

  if(theme === listeThemes.parent) {
    styles = {
      couleurBg :'#F3F1F1'
    }
  }
  

  return (
    <>
      <div>
        <EnTete></EnTete>
        <div id="conteneur-application">{children}</div>
      </div>

      <style jsx>{`
        div {
          background-color: ${ styles.couleurBg };
          height: 100vh;
        }

        #conteneur-application {
          display: flex;
          justify-content: center;
          height: 100%;
        }
      `}</style>
    </>
  );
}
