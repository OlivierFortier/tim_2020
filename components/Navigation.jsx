import styles from "./Navigation.module.scss";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useProxy } from "valtio";
import { etatMenu } from "./etat_global/EtatMenu";
import { useListeThemes, useTheme } from "../hooks/contexteTheme";

export default function Navigation() {
  // gestion du theme
  const theme = useTheme();
  const listeThemes = useListeThemes();
  const [lesStyles, setLesStyles] = useState({ couleurNav: "#f3f1f1" });

  useEffect(() => {
    switch (theme) {
      case listeThemes.art:
        setLesStyles({ couleurNav: "#f3f1f1" });
        break;

      case listeThemes.code:
        setLesStyles({ couleurNav: "#f3f1f1" });
        break;

      case listeThemes.parent:
        setLesStyles({ couleurNav: "black" });
        break;

      default:
        setLesStyles({ couleurNav: "#f3f1f1" });
        break;
    }
  }, [theme]);

  // obtenir l'état du menu pour faire apparaitre ou disparaitre la nav secondaire
  const snapShot = useProxy(etatMenu);

  // obtenir la section actuelle
  const router = useRouter();

  // selon la section actuelle, changer le width de la barre
  const [progresBarre, setProgresBarre] = useState("0%");
  const [margesDessus, setMargeDessus] = useState("");

  const ecranMobile = useMediaQuery({ minWidth: 309, maxWidth: 766 });
  const ecranTablette = useMediaQuery({ minWidth: 767, maxWidth: 1024 });

  // ajuster le progres de la barre selon la page ou nous sommes + ajuster marge de la barre
  useEffect(() => {
    setMargeDessus("");
    if (router.pathname === "") {
      setProgresBarre("0%");
      if (ecranMobile) setMargeDessus("-10%");
      if (ecranTablette) setMargeDessus("-10%");
    }
    if (router.pathname === "/introduction") {
      setMargeDessus("-25% !important");
      setProgresBarre("10%");
    }
    if (router.pathname === "/cours") setProgresBarre("30%");
    if (router.pathname.includes("/professeurs")) {
      setProgresBarre("50%");
      setMargeDessus("-2%");
    }
    if (router.pathname.includes("/etudiants")) {
      setProgresBarre("70%");
      setMargeDessus("2%");
      if (ecranMobile) setMargeDessus("-10%");
      if (ecranTablette) setMargeDessus("-10%");
    }
    if (router.pathname.includes("/futur")) setProgresBarre("90%");
    if (router.pathname === "/inscription") setProgresBarre("100%");
  }, [router]);

  return (
    !snapShot.menuEstOuvert && (
      <footer
        id="navSecondaire"
        style={{ marginTop: margesDessus }}
        className={styles.conteneurNavigation}
      >
        <span className={styles.barreNavigation}>
          <Link scroll={false} scroll={false} href="/">
            <button
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              01
            </button>
          </Link>
          <Link scroll={false} href="/introduction">
            <button
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              02
            </button>
          </Link>
          <Link scroll={false} href="/cours">
            <button
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              03
            </button>
          </Link>
          <Link scroll={false} href="/professeurs">
            <button
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              04
            </button>
          </Link>
          <Link scroll={false} href="/etudiants">
            <button
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              05
            </button>
          </Link>
          <Link scroll={false} href="/futur">
            <button
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              06
            </button>
          </Link>
          <Link scroll={false} href="/inscription">
            <button
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              07
            </button>
          </Link>
          <span
            style={{ width: progresBarre, borderColor: lesStyles.couleurNav }}
            className={styles.ligneProgres}
          ></span>
        </span>
      </footer>
    )
  );
}
