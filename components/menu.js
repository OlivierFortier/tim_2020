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
            <ul>
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
          </nav>
        )}
      </div>

      <style jsx>{`
        button {
          position: relative;
          z-index: 4;
        }

        nav {
          display: flex;
          flex-direction: column;
          position: absolute;
          right: 0vw;
          top: 0vh;
          color: white;
          font-size: 2em;
          z-index: 3;
          height: calc(100% + 26px);
          background-color: #110c12;
          box-shadow: 5px 5px 20px #f18163;
        }
        ul {
          list-style-type: none;
          padding-inline-start: 1rem;
          padding-inline-end: 1rem;
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
