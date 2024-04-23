import { useState, useEffect } from "react";
import { useSnapshot } from "valtio";
import Link from "next/link";
import Menu from "./Menu";
import BoutonSelectionTheme from "./BoutonSelectionTheme";
import styles from "./enTete.module.scss";
import { useListeThemes, useTheme } from "../../hooks/ContexteTheme";
import { etatMenu } from "../../libs/etat_global/etatMenu";

export default function EnTete() {
  // gestion des couleurs selon le thème
  const [lesStyles, setLesStyles] = useState({
    couleurTexte: "#F04E2A"
  });

  // obtenir l'état du menu pour rendre la couleur du texte visible
  const snapShot = useSnapshot(etatMenu);

  const leTheme = useTheme();
  const listeThemes = useListeThemes();

  useEffect(() => {
    switch (leTheme) {
      case listeThemes.art:
        setLesStyles({
          couleurTexte: "#F3f1f1"
        });
        break;

      case listeThemes.code:
        setLesStyles({
          couleurTexte: "#f3f1f1"
        });
        break;

      case listeThemes.parent:
        setLesStyles({
          couleurTexte: "#000000"
        });
        if (snapShot.menuEstOuvert) setLesStyles({ couleurTexte: "#f3f1f1" });
        break;

      default:
        setLesStyles({
          couleurTexte: "#f3f1f1"
        });
        break;
    }
  }, [
    leTheme,
    listeThemes.art,
    listeThemes.code,
    listeThemes.parent,
    snapShot.menuEstOuvert
  ]);

  return (
    <header id="header-site" className={styles.enTete}>
      <span className={styles.conteneurEntete}>
        <BoutonSelectionTheme />
        <Link href="/">
          <h1
            className={styles.titre}
            style={{ color: lesStyles.couleurTexte }}
          >
            <button>Techniques d&apos;intégration multimédia</button>
          </h1>
        </Link>
      </span>
      <Menu />
    </header>
  );
}
