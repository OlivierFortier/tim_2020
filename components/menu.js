import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <>
      <div style={{color: "white"}}>
        <button aria-label="ouvrir ou fermer menu" onClick={() => setMenuOuvert(!menuOuvert)}>menu</button>
        {menuOuvert && (
          <nav>
            <ul>
              <li><Link href="/" as="/"><a>Accueil</a></Link></li>
              <li><Link href="/exemplecontentful" as="/exemplecontentful"><a>CMS contentful</a></Link></li>
              <li><Link href="/professeurs" as="/professeurs"><a>Les Professeurs</a></Link></li>
              <li><Link href="/collection" as="/collection"><a>Collections</a></Link></li>
              <li><Link href="/personnage" as="/personnage"><a>Personnages</a></Link></li>
              <li><Link href="/produits" as="/produits"><a>Produits</a></Link></li>
              <li><Link href="/vitalite" as="/vitalite"><a>Vitalité</a></Link></li>
            </ul>
          </nav>
        )}
      </div>

      <style jsx>{`
        nav {
          display: flex;
          flex-direction: column;
          position: absolute;
          right: 1vw;
          color: white;
          font-size: 2em;
        }

        a {
            &:link,
            &:visited,
            &:hover,
            &:active {
              color: green;
            }
        }
        
      `}</style>
    </>
  );
}
