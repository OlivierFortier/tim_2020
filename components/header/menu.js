import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
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
    <RiMenu3Line
      size="3.5rem"
      style={{ cursor: "pointer", position: "relative", zIndex: 4 }}
      aria-label="ouvrir ou fermer menu"
      onClick={() => setMenuOuvert(!menuOuvert)}
    />
  ) : (
    <ImCancelCircle
      size="3.5rem"
      style={{ cursor: "pointer", position: "relative", zIndex: 4 }}
      aria-label="ouvrir ou fermer menu"
      onClick={() => setMenuOuvert(!menuOuvert)}
    />
  );

  const router = useRouter();

  return (
    <>
      <div className={styles.conteneurMenu} style={{ color: "white" }}>
        {menuBouton}
        {menuOuvert && (
          <div className={styles.fondNav}>
            <nav>
              <div className={styles.conteneurListePages}>
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
                    <Link href="/exemplecontentful" as="/exemplecontentful">
                      <div className={styles.wrapLien}>
                        <a onClick={fermerMenu}>CMS Contentful </a>
                        {router.pathname === "/exemplecontentful" && (
                          <div className={styles.wrapPagination}>
                            <span></span>
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              <address>
                <Link href="/" as="/">
                  <a className={styles.rue} onClick={fermerMenu}>
                    3800 rue shrebrooke e, montréal, qc h1x 2a2
                  </a>
                </Link>
                <ul className={styles.liensContact}>
                  <Link href="/" as="/">
                    <a onClick={fermerMenu}>discord</a>
                  </Link>
                  <Link href="/" as="/">
                    <a onClick={fermerMenu}>instagram</a>
                  </Link>
                  <Link href="/" as="/">
                    <a onClick={fermerMenu}>facebook</a>
                  </Link>
                  <Link href="/" as="/">
                    <a onClick={fermerMenu}>youtube</a>
                  </Link>
                </ul>
              </address>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
