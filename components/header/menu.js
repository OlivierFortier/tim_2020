import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styles from "./menu.module.scss";
import { useProxy } from "valtio";
import { etatMenu } from "../etat_global/EtatMenu";
import { useListeThemes, useTheme } from "../../hooks/contexteTheme";

export default function Menu() {
  const [lesStyles, setLesStyles] = useState({ couleurIconeMenu: "#f3f1f1" });

  const theme = useTheme();
  const listeThemes = useListeThemes();

  //gestion du theme de couleurs
  useEffect(() => {
    switch (theme) {
      case listeThemes.art:
        setLesStyles({
          couleurIconeMenu: "#f3f1f1",
        });
        break;

      case listeThemes.code:
        setLesStyles({
          couleurIconeMenu: "#f3f1f1",
        });
        break;

      case listeThemes.parent:
        setLesStyles({
          couleurIconeMenu: "black",
        });
        break;

      default:
        setLesStyles({
          couleurIconeMenu: "#f3f1f1",
        });
        break;
    }
  }, [theme]);

  //gérer l'état du menu, ouvert - oui ou non ?
  const snapShot = useProxy(etatMenu);

  //fonction "wrapper" pour la passer au onClick pour fermer le menu lorsqu'on clique sur un bouton du menu
  function fermerMenu() {
    etatMenu.menuEstOuvert = false;
  }

  function ouvrirFermerMenu() {
    etatMenu.menuEstOuvert = !etatMenu.menuEstOuvert;
  }

  //changer le bouton du menu si il est ouvert ou non
  const menuBouton = !snapShot.menuEstOuvert ? (
    <motion.div
      layout
      key="ouvrir"
      layoutId="bouton"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <RiMenu3Line
        className={styles.barresMenu}
        style={{
          cursor: "pointer",
          position: "relative",
          zIndex: 4,
          color: lesStyles.couleurIconeMenu,
        }}
        aria-label="ouvrir ou fermer menu"
        onClick={() => ouvrirFermerMenu() /*setMenuOuvert(!menuOuvert)*/}
      />
    </motion.div>
  ) : (
    <motion.div
      layout
      key="fermer"
      layoutId="bouton"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ImCancelCircle
        className={styles.cancel}
        style={{ cursor: "pointer", position: "relative", zIndex: 4 }}
        aria-label="ouvrir ou fermer menu"
        onClick={() => ouvrirFermerMenu() /*setMenuOuvert(!menuOuvert)*/}
      />
    </motion.div>
  );

  const router = useRouter();

  return (
    <>
      <div className={styles.conteneurMenu} style={{ color: "white" }}>
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence exitBeforeEnter>{menuBouton}</AnimatePresence>
          <AnimatePresence exitBeforeEnter>
            {snapShot.menuEstOuvert && (
              <motion.div
                key="divMenu"
                layout
                className={styles.fondNav}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "100vh", opacity: 1 }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: { type: "tween", duration: 0.3 },
                }}
              >
                <motion.nav
                  key="nav"
                  layout
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  exit={{
                    height: 0,
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                >
                  <span className={styles.conteneurImage}>
                  <h6 className={styles.texteLogo}>Collège de Maisonneuve</h6>
                  <Image layout="fill" unsized src={"/images/logo-maisonneuve.webp"} className={styles.logoCollege} />
                  
                  </span>
                  <motion.div
                    key="liensPages"
                    className={styles.conteneurListePages}
                    initial={{ y: "10%", opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.6, delay: 0.3 },
                    }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                  >
                    <ul className={styles.listePages}>
                      <li>
                        <Link href="/" as="/">
                          <div className={styles.wrapLien}>
                            <a onClick={fermerMenu}>Accueil </a>
                            {router.pathname === "/" ||
                              (router.pathname === "/introduction" && (
                                <div className={styles.wrapPagination}>
                                  <span></span>
                                </div>
                              ))}
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/cours" as="/cours">
                          <div className={styles.wrapLien}>
                            <a onClick={fermerMenu}>Cours </a>
                            {router.pathname.includes("/cours") && (
                              <div className={styles.wrapPagination}>
                                <span></span>
                              </div>
                            )}
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/professeurs" as="/professeurs">
                          <div className={styles.wrapLien}>
                            <a onClick={fermerMenu}>Professeurs </a>
                            {router.pathname.includes("/professeurs") && (
                              <div className={styles.wrapPagination}>
                                <span></span>
                              </div>
                            )}
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link href="/etudiants" as="/etudiants">
                          <div className={styles.wrapLien}>
                            <a onClick={fermerMenu}>Vie Étudiante </a>
                            {router.pathname.includes("/etudiants") && (
                              <div className={styles.wrapPagination}>
                                <span></span>
                              </div>
                            )}
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/futur" as="/futur">
                          <div className={styles.wrapLien}>
                            <a onClick={fermerMenu}>Futur</a>
                            {router.pathname.includes("/futur") && (
                              <div className={styles.wrapPagination}>
                                <span></span>
                              </div>
                            )}
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/inscription" as="/inscription">
                          <div className={styles.wrapLien}>
                            <a onClick={fermerMenu}>Inscription</a>
                            {router.pathname === "/inscription" && (
                              <div className={styles.wrapPagination}>
                                <span></span>
                              </div>
                            )}
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.address
                    key="contact"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.6, ease: "easeInOut" },
                    }}
                    exit={{ opacity: 0 }}
                  >
                    <Link href="https://goo.gl/maps/jrFz5KmhQqqW3YQS9">
                      <a
                        target="_blank"
                        className={styles.rue}
                        onClick={fermerMenu}
                      >
                        3800, rue Sherbrooke Est, Montréal, QC H1X 2A2
                      </a>
                    </Link>
                    <ul className={styles.liensContact}>
                      <Link href="">
                        <a target="_blank" onClick={fermerMenu}>
                          discord
                        </a>
                      </Link>

                      <Link href="https://www.instagram.com/maisonneuvetim/">
                        <a target="_blank" onClick={fermerMenu}>
                          instagram
                        </a>
                      </Link>
                      <Link href="https://www.facebook.com/maisonneuvetim/">
                        <a target="_blank" onClick={fermerMenu}>
                          facebook
                        </a>
                      </Link>
                      <Link href="https://www.youtube.com/user/TIMaisonneuve">
                        <a target="_blank" onClick={fermerMenu}>
                          youtube
                        </a>
                      </Link>
                    </ul>
                  </motion.address>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </>
  );
}
