import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";

export default function Menu() {
  //gérer l'état du menu, ouvert - oui ou non ?
  const [menuOuvert, setMenuOuvert] = useState(false);

  //fonction "wrapper" pour la passer au onClick pour fermer le menu lorsqu'on clique sur un bouton du menu
  function fermerOuvrirMenu() {
    setMenuOuvert(menu => menu = !menu);
  }

  //changer le bouton du menu si il est ouvert ou non
  const menuBouton = !menuOuvert ? (
    <RiMenu3Line
      size="3.5rem"
      style={{ cursor: "pointer", position: "relative", zIndex: 4 }}
      aria-label="ouvrir ou fermer menu"
      onClick={fermerOuvrirMenu}
    />
  ) : (
    <ImCancelCircle
      size="3.5rem"
      style={{ cursor: "pointer", position: "relative", zIndex: 4 }}
      aria-label="ouvrir ou fermer menu"
      onClick={fermerOuvrirMenu}
    />
  );

  const router = useRouter();

  return (
    <>
      <div className="conteneur-menu" style={{ color: "white" }}>
        {menuBouton}
        {menuOuvert && (
          <div className="fond-nav">
            <nav>
              <div className="conteneur-liste-pages">
                <ul className="liste-pages">
                  <li>
                    <Link href="/" as="/">
                      <div className="wrap-lien">
                        <a onClick={fermerOuvrirMenu}>Accueil </a>
                        {router.pathname === "/" && (
                          <div className="wrap-pagination">
                            <span></span>
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/professeurs" as="/professeurs">
                      <div className="wrap-lien">
                        <a onClick={fermerOuvrirMenu}>Professeurs </a>
                        {router.pathname === "/professeurs" && (
                          <div className="wrap-pagination">
                            <span></span>
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cours" as="/cours">
                      <div className="wrap-lien">
                        <a onClick={fermerOuvrirMenu}>Cours </a>
                        {router.pathname === "/cours" && (
                          <div className="wrap-pagination">
                            <span></span>
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/etudiants" as="/etudiants">
                      <div className="wrap-lien">
                        <a onClick={fermerOuvrirMenu}>Vie Étudiante </a>
                        {router.pathname === "/etudiants" && (
                          <div className="wrap-pagination">
                            <span></span>
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/exemplecontentful" as="/exemplecontentful">
                      <div className="wrap-lien">
                        <a onClick={fermerOuvrirMenu}>CMS Contentful </a>
                        {router.pathname === "/exemplecontentful" && (
                          <div className="wrap-pagination">
                            <span></span>
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              <address id="contact">
                <Link href="/" as="/">
                  <a className="rue" onClick={fermerOuvrirMenu}>
                    3800 rue shrebrooke e, montréal, qc h1x 2a2
                  </a>
                </Link>
                <ul className="liens-contact">
                  <Link href="/" as="/">
                    <a onClick={fermerOuvrirMenu}>discord</a>
                  </Link>
                  <Link href="/" as="/">
                    <a onClick={fermerOuvrirMenu}>instagram</a>
                  </Link>
                  <Link href="/" as="/">
                    <a onClick={fermerOuvrirMenu}>facebook</a>
                  </Link>
                  <Link href="/" as="/">
                    <a onClick={fermerOuvrirMenu}>youtube</a>
                  </Link>
                </ul>
              </address>
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        .conteneur-menu {
          z-index: 6;
        }

        .fond-nav {
          display: flex;
          justify-content: center;
          position: absolute;
          right: 0vw;
          top: 0vh;

          height: 88vh;
          width: 100vw;

          background-color: #110c12;

          box-shadow: 5px 5px 20px #f18163;
        }

        nav {
          height: 100%;
          /**À changer avec un media query pour les petits écrans */
          max-width: 1370px;
          display: grid;
          grid-template:
            ". pages" auto
            "contact ." auto
            / 1fr 1fr;
          color: white;
          font-size: 2em;
          z-index: 3;
        }

        .conteneur-liste-pages {
          grid-area: pages;
          display: flex;
          justify-content: flex-end;
        }

        .liste-pages {
          list-style-type: none;
          text-align: end;
          padding-inline-start: 1rem;
          padding-inline-end: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          margin-right: 5%;
          li {
            margin: 1rem;

            .wrap-lien {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }

            a {
              font-family: NeueMontreal;
              font-style: normal;
              font-weight: bold;
              font-size: 48px;
              line-height: 58px;
              text-align: right;
              cursor: pointer;
            }

            .wrap-pagination {
              height: 0;
              width: 0;
              position: relative;
              display: flex;
              justify-content: flex-start;
              align-items: center;

              span {
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
                border: 1px solid white;
                display: inline-block;
                position: absolute;
                margin-left: 1rem;
              }
            }
          }
        }

        address {
          grid-area: contact;
          border-left: 2px solid white;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding-left: 3rem;

          .rue {
            font-family: Montserrat;
            font-style: normal;
            font-weigth: normal;
            font-size: 24px;
            line-height: 29px;
            text-transform: uppercase;
          }
        }

        .liens-contact {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          list-style-type: none;
          padding-inline-start: 0rem;
          padding-inline-end: 0rem;

          a {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 29px;
            text-transform: uppercase;
          }
        }

        a {
          &:link,
          &:visited,
          &:hover,
          &:active {
            color: white;
            text-decoration: none;
          }
          &:hover {
            color: #f18163;
          }
        }
      `}</style>
    </>
  );
}
