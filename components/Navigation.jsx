import styles from "./Navigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { etatMenu } from "../libs/etat_global/etatMenu";
import { useListeThemes, useTheme } from "../hooks/ContexteTheme";
import { motion } from "framer-motion";
import { usePage } from "../hooks/usePage";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export default function Navigation() {
  // gestion du theme
  const theme = useTheme();
  const listeThemes = useListeThemes();
  const [lesStyles, setLesStyles] = useState({
    couleurNav: "#f3f1f1",
    couleurHover: "#F16242"
  });

  useEffect(() => {
    switch (theme) {
      case listeThemes.art:
        setLesStyles({ couleurNav: "#f3f1f1", couleurHover: "#F16242" });
        break;

      case listeThemes.code:
        setLesStyles({ couleurNav: "#f3f1f1", couleurHover: "#24DC48" });
        break;

      case listeThemes.parent:
        setLesStyles({ couleurNav: "#000000", couleurHover: "#4363CA" });
        break;

      default:
        setLesStyles({ couleurNav: "#f3f1f1", couleurHover: "#F16242" });
        break;
    }
  }, [listeThemes.art, listeThemes.code, listeThemes.parent, theme]);

  // obtenir l'état du menu pour faire apparaitre ou disparaitre la nav secondaire
  const snapShot = useSnapshot(etatMenu);

  // obtenir la section actuelle
  const router = useRouter();

  // selon la section actuelle, changer le width de la barre
  const [progresBarre, setProgresBarre] = useState("0%");
  const [margesDessus, setMargeDessus] = useState("");

  // ajuster le progres de la barre selon la page ou nous sommes + ajuster marge de la barre
  useEffect(() => {
    setMargeDessus("");
    if (router.pathname === "/") {
      setProgresBarre("0%");
    }
    if (router.pathname === "/introduction") {
      setProgresBarre("10%");
    }
    if (router.pathname === "/cours") setProgresBarre("30%");
    if (router.pathname.includes("/professeurs")) {
      setProgresBarre("50%");
    }
    if (router.pathname.includes("/etudiants")) {
      setProgresBarre("70%");
    }
    if (router.pathname.includes("/futur")) setProgresBarre("90%");
    if (router.pathname === "/inscription") setProgresBarre("100%");
  }, [router]);

  // gestion des flèches pour avancer ou reculer
  const { page, pagePrecedente, pageSuivante } = usePage();

  const [flechesActives, setFlechesActives] = useState({
    precedent: true,
    suivant: true
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
        <span className={styles.barreNavigation}>
          <Link href={pagePrecedente}>
            <motion.a
              initial={{ color: lesStyles.couleurNav }}
              animate={{ color: lesStyles.couleurNav }}
              whileHover={{ scale: 1.05, color: lesStyles.couleurHover }}
              whileTap={{ scale: 1.2 }}
              className={`${styles.pageAv} ${
                flechesActives.precedent ? "" : styles.pageInactif
              }`}
            >
              <MdNavigateBefore />
            </motion.a>
          </Link>

          <Link href="/">
            <motion.button
              initial={{ color: lesStyles.couleurNav }}
              animate={{ color: lesStyles.couleurNav }}
              whileHover={{ color: lesStyles.couleurHover }}
              whileTap={{ scale: 1.2 }}
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              01
            </motion.button>
          </Link>
          <Link href="/introduction">
            <motion.button
              initial={{ color: lesStyles.couleurNav }}
              animate={{ color: lesStyles.couleurNav }}
              whileHover={{ scale: 1.05, color: lesStyles.couleurHover }}
              whileTap={{ scale: 1.2 }}
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              02
            </motion.button>
          </Link>
          <Link href="/cours">
            <motion.button
              initial={{ color: lesStyles.couleurNav }}
              animate={{ color: lesStyles.couleurNav }}
              whileHover={{ scale: 1.05, color: lesStyles.couleurHover }}
              whileTap={{ scale: 1.2 }}
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              03
            </motion.button>
          </Link>
          <Link href="/professeurs">
            <motion.button
              initial={{ color: lesStyles.couleurNav }}
              animate={{ color: lesStyles.couleurNav }}
              whileHover={{ scale: 1.05, color: lesStyles.couleurHover }}
              whileTap={{ scale: 1.2 }}
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              04
            </motion.button>
          </Link>
          <Link href="/etudiants">
            <motion.button
              initial={{ color: lesStyles.couleurNav }}
              animate={{ color: lesStyles.couleurNav }}
              whileHover={{ scale: 1.05, color: lesStyles.couleurHover }}
              whileTap={{ scale: 1.2 }}
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              05
            </motion.button>
          </Link>
          <Link href="/futur">
            <motion.button
              initial={{ color: lesStyles.couleurNav }}
              animate={{ color: lesStyles.couleurNav }}
              whileHover={{ scale: 1.05, color: lesStyles.couleurHover }}
              whileTap={{ scale: 1.2 }}
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              06
            </motion.button>
          </Link>
          <Link href="/inscription">
            <motion.button
              initial={{ color: lesStyles.couleurNav }}
              animate={{ color: lesStyles.couleurNav }}
              whileHover={{ scale: 1.05, color: lesStyles.couleurHover }}
              whileTap={{ scale: 1.2 }}
              style={{ color: lesStyles.couleurNav }}
              className={styles.boutonUneSection}
            >
              07
            </motion.button>
          </Link>
          <Link href={pageSuivante}>
            <motion.a
              initial={{ color: lesStyles.couleurNav }}
              animate={{ color: lesStyles.couleurNav }}
              whileHover={{ scale: 1.05, color: lesStyles.couleurHover }}
              whileTap={{ scale: 1.2 }}
              className={`${styles.pageSuiv} ${
                flechesActives.suivant ? "" : styles.pageInactif
              }`}
            >
              <MdNavigateNext />
            </motion.a>
          </Link>
          <motion.span
            layout
            style={{ width: progresBarre, borderColor: lesStyles.couleurNav }}
            className={styles.ligneProgres}
          />
          <span className={styles.ligneFond} />
        </span>
      </footer>
    )
  );
}
