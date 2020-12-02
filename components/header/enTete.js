import Menu from "./menu";
import BoutonSelectionTheme from "./boutonSelectionTheme";
import styles from "./enTete.module.scss";
import { useState, useEffect } from "react";
import { useListeThemes, useTheme } from "../../hooks/contexteTheme";

export default function EnTete() {
  const [lesStyles, setLesStyles] = useState({
    couleurTexte: "#F04E2A",
  });

  const leTheme = useTheme();
  const listeThemes = useListeThemes();

  useEffect(() => {
    switch (leTheme) {
      case listeThemes.art:
        setLesStyles({
          couleurTexte: "#F3f1f1",
        });
        break;

      case listeThemes.code:
        setLesStyles({
          couleurTexte: "#f3f1f1",
        });
        break;

      case listeThemes.parent:
        setLesStyles({
          couleurTexte: "black",
        });
        break;

      default:
        setLesStyles({
          couleurTexte: "#f3f1f1",
        });
        break;
    }
  }, [leTheme]);

  return (
    <>
      <header id="header-site" className={styles.enTete}>
        <span className={styles.conteneurEntete}>
          <BoutonSelectionTheme />
          <h1
            className={styles.titre}
            style={{ color: lesStyles.couleurTexte }}
          >
            Techniques d'intégration multimédia
          </h1>
        </span>
        <Menu />
      </header>
    </>
  );
}
