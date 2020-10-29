import { useEffect, useState } from "react";
import { useListeThemes, useTheme } from "../hooks/contexteTheme";
import EnTete from "./header/enTete";
import styles from "./layout.module.scss";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

export default function Layout({ children }) {
  //grace au thème, on peut changer le css dynamiquement avec javascript selon le thème choisi
  const theme = useTheme();
  const listeThemes = useListeThemes();

  const [themeStyles, setThemeStyles] = useState({ couleurBg: "#110c12" });

  useEffect(() => {
    switch (theme) {
      case listeThemes.art:
        setThemeStyles({
          couleurBg: "#110c12",
        });
        break;

      case listeThemes.code:
        setThemeStyles({
          couleurBg: "#110c12",
        });
        break;

      case listeThemes.parent:
        setThemeStyles({
          couleurBg: "#F3F1F1",
        });
        break;

      default:
        setThemeStyles({
          couleurBg: "#110c12",
        });

        break;
    }
  }, [theme]);

  return (
    <>
      <div
        className={styles.racine}
        style={{ backgroundColor: themeStyles.couleurBg }}
      >
        <div className={styles.conteneurTout}>
          <EnTete></EnTete>
          <ReactScrollWheelHandler
            style={{ all: "unset" }}
            upHandler={(e) => console.log("scroll up")}
            downHandler={(e) => console.log("scroll down")}
          >
            <div
              id="conteneur-application"
              className={styles.conteneurApplication}
            >
              {children}
            </div>
          </ReactScrollWheelHandler>
        </div>
      </div>
    </>
  );
}
