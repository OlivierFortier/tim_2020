import { useEffect, useState } from "react";
import { useListeThemes, useTheme } from "../hooks/contexteTheme";
import EnTete from "./header/enTete";

export default function Layout({ children }) {
  //grace au thème, on peut changer le css dynamiquement avec javascript selon le thème choisi
  const theme = useTheme();
  const listeThemes = useListeThemes();

  const [styles, setStyles] = useState({ couleurBg: "#110c12" });

  useEffect(() => {
    switch (theme) {
      case listeThemes.art:
        setStyles({
          couleurBg: "#110c12",
        });
        break;

      case listeThemes.code:
        setStyles({
          couleurBg: "#110c12",
        });
        break;

      case listeThemes.parent:
        setStyles({
          couleurBg: "#F3F1F1",
        });
        break;

      default:
        setStyles({
          couleurBg: "#110c12",
        });

        break;
    }
  }, [theme]);

  return (
    <>
      <div>
        <EnTete></EnTete>
        <div id="conteneur-application">{children}</div>
      </div>

      <style jsx>{`
        div {
          background-color: ${styles.couleurBg};
          height: 100vh;
        }

        #conteneur-application {
          display: flex;
          justify-content: center;
          height: auto;
        }
      `}</style>
    </>
  );
}
