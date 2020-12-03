import Menu from "./menu";
import BoutonSelectionTheme from "./boutonSelectionTheme";
import styles from "./enTete.module.scss";
import { useState, useEffect } from "react";
import { useListeThemes, useTheme } from "../../hooks/contexteTheme";
import { useProxy } from "valtio";
import { etatMenu } from "../etat_global/EtatMenu";
import Link from "next/link";

export default function EnTete() {
  const [lesStyles, setLesStyles] = useState({
    couleurTexte: "#F04E2A",
  });

  // obtenir l'état du menu pour rendre la couleur du texte visible
  const snapShot = useProxy(etatMenu);

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
          couleurTexte: "#000000",
        });
        if (snapShot.menuEstOuvert) setLesStyles({ couleurTexte: "#f3f1f1" });
        break;

      default:
        setLesStyles({
          couleurTexte: "#f3f1f1",
        });
        break;
    }
  }, [leTheme, snapShot.menuEstOuvert]);

  return (
    <>
      <header id="header-site" className={styles.enTete}>
        <span className={styles.conteneurEntete}>
          <BoutonSelectionTheme />
          <Link href="/">
            <h1
              className={styles.titre}
              style={{ color: lesStyles.couleurTexte }}
            >
              <a>Techniques d'intégration multimédia</a>
            </h1>
          </Link>
        </span>
        <Menu />
      </header>
    </>
  );
}
