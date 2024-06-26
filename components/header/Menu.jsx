import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useSnapshot } from "valtio";
import styles from "./menu.module.scss";
import { etatMenu } from "../../libs/etat_global/etatMenu";
import { useListeThemes, useTheme } from "../../hooks/ContexteTheme";

export default function Menu() {
  // gestion du theme de couleurs
  const [lesStyles, setLesStyles] = useState({ couleurIconeMenu: "#f3f1f1" });

  const theme = useTheme();
  const listeThemes = useListeThemes();

  useEffect(() => {
    switch (theme) {
      case listeThemes.art:
        setLesStyles({
          couleurIconeMenu: "#f3f1f1"
        });
        break;

      case listeThemes.code:
        setLesStyles({
          couleurIconeMenu: "#f3f1f1"
        });
        break;

      case listeThemes.parent:
        setLesStyles({
          couleurIconeMenu: "black"
        });
        break;

      default:
        setLesStyles({
          couleurIconeMenu: "#f3f1f1"
        });
        break;
    }
  }, [listeThemes.art, listeThemes.code, listeThemes.parent, theme]);

  // gérer l'état du menu, ouvert - oui ou non ?
  const snapShot = useSnapshot(etatMenu);

  function fermerMenu() {
    etatMenu.menuEstOuvert = false;
  }

  function ouvrirFermerMenu() {
    etatMenu.menuEstOuvert = !etatMenu.menuEstOuvert;
  }

  // changer le bouton du menu si il est ouvert ou non
  const menuBouton = snapShot.menuEstOuvert ? (
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
        onClick={() => ouvrirFermerMenu() /* setMenuOuvert(!menuOuvert) */}
      />
    </motion.div>
  ) : (
    <motion.div
      layout
      key="ouvrir"
      layoutId="bouton"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <RiMenu3Line
        className={styles.barresMenu}
        style={{
          cursor: "pointer",
          position: "relative",
          zIndex: 4,
          color: lesStyles.couleurIconeMenu
        }}
        aria-label="ouvrir ou fermer menu"
        onClick={() => ouvrirFermerMenu() /* setMenuOuvert(!menuOuvert) */}
      />
    </motion.div>
  );

  const router = useRouter();

  return (
    <div className={styles.conteneurMenu} style={{ color: "white" }}>
      <AnimateSharedLayout type="crossfade">
        {menuBouton}
        <AnimatePresence mode="wait">
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
                transition: { type: "tween", duration: 0.3 }
              }}
            >
              <motion.nav
                key="nav"
                layout
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                exit={{
                  height: 0,
                  transition: { duration: 1, ease: "easeInOut" }
                }}
              >
                <Link
                  target="_blank"
                  onClick={fermerMenu}
                  href="https://www.cmaisonneuve.qc.ca/programme/integration-multimedia/"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileHover={{
                      color: "#FF7F50",
                      transition: { delay: 0 }
                    }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={styles.conteneurImage}
                  >
                    <h6 className={styles.texteLogo}>Collège de Maisonneuve</h6>

                    <Image
                      layout="fill"
                      unsized
                      src="/images/logo-maisonneuve.webp"
                      className={styles.logoCollege}
                      alt="logo du collège de Maisonneuve"
                    />
                  </motion.span>
                </Link>
                <motion.div
                  key="liensPages"
                  className={styles.conteneurListePages}
                  initial={{ y: "10%", opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6, delay: 0.3 }
                  }}
                  exit={{ opacity: 0, transition: { duration: 1 } }}
                >
                  <ul className={styles.listePages}>
                    <li>
                      <Link
                        target="_blank"
                        onClick={fermerMenu}
                        href="/"
                        as="/"
                      >
                        <div className={styles.wrapLien}>
                          <button onClick={fermerMenu}>Accueil </button>
                          {router.pathname === "/" && (
                            <div className={styles.wrapPagination}>
                              <span />
                            </div>
                          )}
                          {router.pathname === "/introduction" && (
                            <div className={styles.wrapPagination}>
                              <span />
                            </div>
                          )}
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        onClick={fermerMenu}
                        href="/cours"
                        as="/cours"
                      >
                        <div className={styles.wrapLien}>
                          <button onClick={fermerMenu}>Cours </button>
                          {router.pathname.includes("/cours") && (
                            <div className={styles.wrapPagination}>
                              <span />
                            </div>
                          )}
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        onClick={fermerMenu}
                        href="/professeurs"
                        as="/professeurs"
                      >
                        <div className={styles.wrapLien}>
                          <button onClick={fermerMenu}>Professeurs </button>
                          {router.pathname.includes("/professeurs") && (
                            <div className={styles.wrapPagination}>
                              <span />
                            </div>
                          )}
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link
                        target="_blank"
                        onClick={fermerMenu}
                        href="/etudiants"
                        as="/etudiants"
                      >
                        <div className={styles.wrapLien}>
                          <button onClick={fermerMenu}>Vie Étudiante </button>
                          {router.pathname.includes("/etudiants") && (
                            <div className={styles.wrapPagination}>
                              <span />
                            </div>
                          )}
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        onClick={fermerMenu}
                        href="/futur"
                        as="/futur"
                      >
                        <div className={styles.wrapLien}>
                          <button onClick={fermerMenu}>Futur</button>
                          {router.pathname.includes("/futur") && (
                            <div className={styles.wrapPagination}>
                              <span />
                            </div>
                          )}
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        onClick={fermerMenu}
                        href="/inscription"
                        as="/inscription"
                      >
                        <div className={styles.wrapLien}>
                          <button onClick={fermerMenu}>Inscription</button>
                          {router.pathname === "/inscription" && (
                            <div className={styles.wrapPagination}>
                              <span />
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
                    transition: { delay: 0.6, ease: "easeInOut" }
                  }}
                  exit={{ opacity: 0 }}
                >
                  <Link
                    className={styles.rue}
                    target="_blank"
                    onClick={fermerMenu}
                    href="https://goo.gl/maps/jrFz5KmhQqqW3YQS9"
                  >
                    3800, rue Sherbrooke Est, Montréal, QC H1X 2A2
                  </Link>
                  <ul className={styles.liensContact}>
                    <Link target="_blank" onClick={fermerMenu} href="">
                      discord
                    </Link>

                    <Link
                      target="_blank"
                      onClick={fermerMenu}
                      href="https://www.instagram.com/maisonneuvetim/"
                    >
                      instagram
                    </Link>
                    <Link
                      target="_blank"
                      onClick={fermerMenu}
                      href="https://www.facebook.com/maisonneuvetim/"
                    >
                      facebook
                    </Link>
                    <Link
                      target="_blank"
                      onClick={fermerMenu}
                      href="https://www.youtube.com/user/TIMaisonneuve"
                    >
                      youtube
                    </Link>
                  </ul>
                </motion.address>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
}
