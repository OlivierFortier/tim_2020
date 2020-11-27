import { useEffect, useState } from "react";
import { useListeThemes, useTheme } from "../hooks/contexteTheme";
import EnTete from "./header/enTete";
import styles from "./layout.module.scss";
import { useRouter } from "next/router";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  const router = useRouter();

  //grace au thème, on peut changer le css dynamiquement avec javascript selon le thème choisi
  const theme = useTheme();
  const listeThemes = useListeThemes();

  useEffect(() => {
    if (router.pathname != "/")
      document.documentElement.style.setProperty("--bgAcceuil", 'url("")');
  }, [router.pathname]);

  const [themeStyles, setThemeStyles] = useState({ couleurBg: "#110c12", couleurTexte: "#f3f1f1", grain: true });

  useEffect(() => {
    switch (theme) {
      case listeThemes.art:
        setThemeStyles({
          couleurBg: "#110c12",
          couleurTexte: "#f3f1f1",
          grain : true
        });
        break;

      case listeThemes.code:
        setThemeStyles({
          couleurBg: "#110c12",
          couleurTexte: "#f3f1f1",
          grain : true
        });
        break;

      case listeThemes.parent:
        setThemeStyles({
          couleurBg: "#F3F1F1",
          couleurTexte: "black",
          grain : false
        });
        break;

      default:
        setThemeStyles({
          couleurBg: "#110c12",
          couleurTexte: "#f3f1f1",
          grain : true
        });

        break;
    }
  }, [theme]);

  return (
    <>
      <div
        id="racine"
        className={`${styles.racine} ${themeStyles.grain ? styles.grain : ""}`}
        style={{ backgroundColor: themeStyles.couleurBg, color: themeStyles.couleurTexte }}
      >
        <div className={styles.conteneurTout}>
          <EnTete></EnTete>
          <div
            id="conteneur-application"
            className={styles.conteneurApplication}
            tabIndex={0}
          >
            {children}
          </div>
        </div>
        <Navigation/>
      </div>
    </>
  );
}
