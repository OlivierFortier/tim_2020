import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [menuOuvert, setMenuOuvert] = useState(false);

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
          <nav>
            <div className="conteneur-liste-pages">
              <ul className="liste-pages">
                <li>
                  <Link href="/" as="/">
                    <a>Accueil</a>
                  </Link>
                </li>
                <li>
                  <Link href="/professeurs" as="/professeurs">
                    <a>Les Professeurs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/etudiants" as="/etudiants">
                    <a>Vie Étudiante</a>
                  </Link>
                </li>
                <li>
                  <Link href="/exemplecontentful" as="/exemplecontentful">
                    <a>CMS Contentful</a>
                  </Link>
                </li>
              </ul>
            </div>

            <address id="contact">
              <Link href="/" as="/">
                <a>3800 rue shrebrooke e, montréal, qc h1x 2a2</a>
              </Link>
              <ul className="liens-contact">
                <Link href="/" as="/">
                  <a>discord</a>
                </Link>
                <Link href="/" as="/">
                  <a>instagram</a>
                </Link>
                <Link href="/" as="/">
                  <a>facebook</a>
                </Link>
                <Link href="/" as="/">
                  <a>youtube</a>
                </Link>
              </ul>
            </address>
          </nav>
        )}
      </div>

      <style jsx>{`
        button {
          position: relative;
          z-index: 4;
        }

        nav {
          display: grid;
          grid-template:
            ". pages" auto
            "contact ." auto
            / auto auto;
          position: absolute;
          right: 0vw;
          top: 0vh;
          color: white;
          font-size: 2em;
          z-index: 3;
          height: 85vh;
          width: 100vw;
          background-color: #110c12;
          box-shadow: 5px 5px 20px #f18163;
        }

        .conteneur-liste-pages {
          grid-area: pages;
          display: flex;
          justify-content: center;
        }

        .liste-pages {
          list-style-type: none;
          text-align: end;
          padding-inline-start: 1rem;
          padding-inline-end: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;

          li {
            margin: 1rem;
          }

        }

        address {
          grid-area: contact;
          border-left: 2px solid white;
          margin-left: 4rem;
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
