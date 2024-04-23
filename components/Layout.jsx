import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useListeThemes, useTheme } from "../hooks/ContexteTheme";
import EnTete from "./header/EnTete";
import styles from "./layout.module.scss";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  const router = useRouter();

  // grace au thème, on peut changer le css dynamiquement avec javascript selon le thème choisi
  const theme = useTheme();
  const listeThemes = useListeThemes();

  useEffect(() => {
    if (router.pathname != "/")
      document.documentElement.style.setProperty("--bgAcceuil", 'url("")');
  }, [router.pathname]);

  const [themeStyles, setThemeStyles] = useState({
    couleurBg: "#110c12",
    couleurTexte: "#f3f1f1",
    grain: true
  });

  useEffect(() => {
    switch (theme) {
      case listeThemes.art:
        setThemeStyles({
          couleurBg: "#110c12",
          couleurTexte: "#f3f1f1",
          grain: true
        });
        break;

      case listeThemes.code:
        setThemeStyles({
          couleurBg: "black",
          couleurTexte: "#f3f1f1",
          grain: true
        });
        break;

      case listeThemes.parent:
        setThemeStyles({
          couleurBg: "#F3F1F1",
          couleurTexte: "black",
          grain: false
        });
        break;

      default:
        setThemeStyles({
          couleurBg: "#110c12",
          couleurTexte: "#f3f1f1",
          grain: true
        });

        break;
    }
  }, [listeThemes.art, listeThemes.code, listeThemes.parent, theme]);

  return (
    <>
      {/* liens invisibles pour améliorer le SEO */}
      <Link style={{ display: "none" }} href="/">
        accueil
      </Link>
      <Link style={{ display: "none" }} href="/introduction">
        accueil
      </Link>
      <Link style={{ display: "none" }} href="/cours">
        accueil
      </Link>
      <Link style={{ display: "none" }} href="/professeurs">
        accueil
      </Link>
      <Link style={{ display: "none" }} href="/professeurs/grille">
        accueil
      </Link>
      <Link style={{ display: "none" }} href="/etudiants">
        accueil
      </Link>
      <Link style={{ display: "none" }} href="/etudiants/gallerie">
        accueil
      </Link>
      <Link style={{ display: "none" }} href="/etudiants/projets">
        accueil
      </Link>
      <Link style={{ display: "none" }} href="/futur">
        accueil
      </Link>
      <Link
        style={{ display: "none" }}
        href="/futur/perspectives-universitaires"
      >
        accueil
      </Link>
      <Link style={{ display: "none" }} href="/futur/stages">
        accueil
      </Link>
      <Link style={{ display: "none" }} href="/futur/perspectives-demplois">
        accueil
      </Link>
      <Link style={{ display: "none" }} href="/inscription">
        accueil
      </Link>
      <div
        id="racine"
        className={`${styles.racine} ${styles.grain} ${
          themeStyles.grain ? "" : styles.grainBlanc
        }`}
        style={{
          backgroundColor: themeStyles.couleurBg,
          color: themeStyles.couleurTexte
        }}
      >
        <div className={styles.conteneurTout}>
          <EnTete />
          <div
            id="conteneur-application"
            className={styles.conteneurApplication}
          >
            {children}
          </div>
        </div>
        <Navigation />
      </div>
    </>
  );
}
