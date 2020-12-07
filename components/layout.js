import { useEffect, useState } from "react";
import { useListeThemes, useTheme } from "../hooks/contexteTheme";
import EnTete from "./header/enTete";
import styles from "./layout.module.scss";
import { useRouter } from "next/router";
import Navigation from "./Navigation";
import Link from "next/link"
import dynamic from "next/dynamic";
import Chargement from "./Chargement";

const NavDynamique = dynamic(() => import("./Navigation"), {
  ssr: false,
  loading: () => <Chargement/>,
});

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
          couleurBg: "black",
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
    <Link href="/"><a style={{display: "none"}}>accueil</a></Link>
    <Link href="/introduction"><a style={{display: "none"}}>accueil</a></Link>
    <Link href="/cours"><a style={{display: "none"}}>accueil</a></Link>
    <Link href="/professeurs"><a style={{display: "none"}}>accueil</a></Link>
    <Link href="/professeurs/grille"><a style={{display: "none"}}>accueil</a></Link>
    <Link href="/etudiants"><a style={{display: "none"}}>accueil</a></Link>
    <Link href="/etudiants/gallerie"><a style={{display: "none"}}>accueil</a></Link>
    <Link href="/etudiants/projets"><a style={{display: "none"}}>accueil</a></Link>
    <Link href="/futur"><a style={{display: "none"}}>accueil</a></Link>
    <Link href="/futur/perspectives-universitaires"><a style={{display: "none"}}>accueil</a></Link>
    <Link href="/futur/stages"><a style={{display: "none"}}>accueil</a></Link>
    <Link href="/futur/perspectives-demplois"><a style={{display: "none"}}>accueil</a></Link>
    <Link href="/inscription"><a style={{display: "none"}}>accueil</a></Link>
      <div
        id="racine"
        className={`${styles.racine} ${styles.grain} ${themeStyles.grain ? "" : styles.grainBlanc}`}
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
        {/* <Navigation/> */}
        <NavDynamique/>
      </div>
    </>
  );
}
