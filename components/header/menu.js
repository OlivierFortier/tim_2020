import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  //gérer l'état du menu, ouvert - oui ou non ?
  const [menuOuvert, setMenuOuvert] = useState(false);

  //fonction "wrapper" pour la passer au onClick pour fermer le menu lorsqu'on clique sur un bouton du menu
  function fermerMenu() {
    setMenuOuvert(false);
  }

  return (
    <>
      <div className="conteneur-menu" style={{ color: "white" }}>
        <button
          aria-label="ouvrir ou fermer menu"
          onClick={() => setMenuOuvert(!menuOuvert)}
        >
          menu
        </button>
        {menuOuvert && (
          <div className="fond-nav">
            <nav>
              <div className="conteneur-liste-pages">
                <ul className="liste-pages">
                  <li>
                    <Link href="/" as="/">
                      <a onClick={fermerMenu}>Accueil</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/professeurs" as="/professeurs">
                      <a onClick={fermerMenu}>Professeurs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cours" as="/cours">
                      <a onClick={fermerMenu}>Cours</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/etudiants" as="/etudiants">
                      <a onClick={fermerMenu}>Vie Étudiante</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/exemplecontentful" as="/exemplecontentful">
                      <a onClick={fermerMenu}>CMS Contentful</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <address id="contact">
                <Link href="/" as="/">
                  <a onClick={fermerMenu}>
                    3800 rue shrebrooke e, montréal, qc h1x 2a2
                  </a>
                </Link>
                <ul className="liens-contact">
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

      <style jsx>{`
        .conteneur-menu {
          z-index: 6;
        }

        button {
          position: relative;
          z-index: 4;
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
          li {
            margin: 1rem;
          }
        }

        address {
          grid-area: contact;
          border-left: 2px solid white;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }

        .liens-contact {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          list-style-type: none;
          padding-inline-start: 0rem;
          padding-inline-end: 0rem;
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
