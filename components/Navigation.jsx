import styles from "./Navigation.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useProxy } from "valtio";
import { etatMenu } from "./etat_global/EtatMenu";
import { useListeThemes, useTheme } from "../hooks/contexteTheme";
import { motion } from "framer-motion";
import { usePage } from "../hooks/usePage";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

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
    if (router.pathname === "/") {
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

  
  // gestion des flèches pour avancer ou reculer
  const { page, pagePrecedente, pageSuivante } = usePage();

  const [flechesActives, setFlechesActives] = useState({
    precedent: true,
    suivant: true,
  });

  useEffect(() => {
    setFlechesActives({ precedent: true, suivant: true });

    if (pagePrecedente == page) {
      setFlechesActives({ precedent: false, suivant: true });
    }
    if (pageSuivante == page) {
      setFlechesActives({ precedent: true, suivant: false });
    }
  }, [pagePrecedente, pageSuivante, page, router]);

  return (
    !snapShot.menuEstOuvert && (
      <footer
        id="navSecondaire"
        style={{ marginTop: margesDessus }}
        className={styles.conteneurNavigation}
      >
          <div className={styles.conteneurLogo}> 
            <Image height={50} width={50} src={"/images/logo-maisonneuve.webp"} className={styles.logoCollege}/>
            <h6 className={styles.texteLogoCollege}>Collège de Maisonneuve</h6>
          </div>
        <span className={styles.barreNavigation}>
          <Link href={pagePrecedente}>
            <motion.a
            whileHover={{scale: 1.2}}
            whileTap={{scale: 1.5}}
              className={`${styles.pageAv} ${
                flechesActives.precedent ? "" : styles.pageInactif
              }`}
            >
              <MdNavigateBefore color={lesStyles.couleurNav} />
            </motion.a>
          </Link>

          <Link href="/">
            <motion.button whileHover={{scale: 1.2}} whileTap={{scale: 1.5}}
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              01
            </motion.button>
          </Link>
          <Link href="/introduction">
            <motion.button whileHover={{scale: 1.2}} whileTap={{scale: 1.5}}
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              02
            </motion.button>
          </Link>
          <Link href="/cours">
            <motion.button whileHover={{scale: 1.2}} whileTap={{scale: 1.5}}
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              03
            </motion.button>
          </Link>
          <Link href="/professeurs">
            <motion.button whileHover={{scale: 1.2}} whileTap={{scale: 1.5}}
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              04
            </motion.button>
          </Link>
          <Link href="/etudiants">
            <motion.button whileHover={{scale: 1.2}} whileTap={{scale: 1.5}}
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              05
            </motion.button>
          </Link>
          <Link href="/futur">
            <motion.button whileHover={{scale: 1.2}} whileTap={{scale: 1.5}}
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              06
            </motion.button>
          </Link>
          <Link href="/inscription">
            <motion.button whileHover={{scale: 1.2}} whileTap={{scale: 1.5}}
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              07
            </motion.button>
          </Link>
          <Link href={pageSuivante}>
            <motion.a whileHover={{scale: 1.2}} whileTap={{scale: 1.5}}
              className={`${styles.pageSuiv} ${
                flechesActives.suivant ? "" : styles.pageInactif
              }`}
            >
              <MdNavigateNext color={lesStyles.couleurNav} />
            </motion.a>
          </Link>
          <motion.span
            layout
            style={{ width: progresBarre, borderColor: lesStyles.couleurNav }}
            className={styles.ligneProgres}
          ></motion.span>
          <span className={styles.ligneFond}></span>
        </span>
      </footer>
    )
  );
}
