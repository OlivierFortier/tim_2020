import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styles from "./menu.module.scss";

export default function Menu() {
  //gérer l'état du menu, ouvert - oui ou non ?
  const [menuOuvert, setMenuOuvert] = useState(false);

  //fonction "wrapper" pour la passer au onClick pour fermer le menu lorsqu'on clique sur un bouton du menu
  function fermerMenu() {
    setMenuOuvert(false);
  }

  //changer le bouton du menu si il est ouvert ou non
  const menuBouton = !menuOuvert ? (
    <motion.div
      layout
      key="ouvrir"
      layoutId="bouton"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <RiMenu3Line
        size="3.5rem"
        style={{ cursor: "pointer", position: "relative", zIndex: 4 }}
        aria-label="ouvrir ou fermer menu"
        onClick={() => setMenuOuvert(!menuOuvert)}
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
        size="3.5rem"
        style={{ cursor: "pointer", position: "relative", zIndex: 4 }}
        aria-label="ouvrir ou fermer menu"
        onClick={() => setMenuOuvert(!menuOuvert)}
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
            {menuOuvert && (
              <motion.div
                key="divMenu"
                layout
                className={styles.fondNav}
                initial={{ height: 0 }}
                animate={{ height: "88vh" }}
                exit={{
                  height: 0,
                  transition: { type: "tween", duration: 0.3 },
                }}
              >
                <motion.nav
                  key="nav"
                  layout
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  exit={{ height: 0 }}
                >
                  <motion.div
                    key="liensPages"
                    className={styles.conteneurListePages}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { delay: 0.1 } }}
                  >
                    <ul className={styles.listePages}>
                      <li>
                        <Link href="/" as="/">
                          <div className={styles.wrapLien}>
                            <a onClick={fermerMenu}>Accueil </a>
                            {router.pathname === "/" && (
                              <div className={styles.wrapPagination}>
                                <span></span>
                              </div>
                            )}
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/cours" as="/cours">
                          <div className={styles.wrapLien}>
                            <a onClick={fermerMenu}>Cours </a>
                            {router.pathname === "/cours" && (
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
                            {router.pathname === "/professeurs" && (
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
                            {router.pathname === "/etudiants" && (
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
                            {router.pathname === "/futur" && (
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
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "100%",
                      opacity: 1,
                      transition: { delay: 0.3 },
                    }}
                  >
                    <Link href="/" as="/">
                      <a className={styles.rue} onClick={fermerMenu}>
                        3800 rue shrebrooke e, montréal, qc h1x 2a2
                      </a>
                    </Link>
                    <ul className={styles.liensContact}>
                      <Link href="https://ca.linkedin.com/in/tim-tim-9407b7131">
                        <a onClick={fermerMenu}>Linked</a>
                      </Link>
                      <Link href="https://www.instagram.com/maisonneuvetim/">
                        <a onClick={fermerMenu}>instagram</a>
                      </Link>
                      <Link href="https://www.facebook.com/maisonneuvetim/">
                        <a onClick={fermerMenu}>facebook</a>
                      </Link>
                      <Link href="https://www.youtube.com/user/TIMaisonneuve">
                        <a onClick={fermerMenu}>youtube</a>
                      </Link>
                      <Link href="">
                        <a onClick={fermerMenu}>discord</a>
                      </Link>
                      <Link href="https://www.youtube.com/user/TIMcreation3D">
                        <a onClick={fermerMenu}>youtube 3D</a>
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
