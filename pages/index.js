import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <div className="conteneur-page">
      <main>
        <h1 className="titre-intro">
          <Link href="/produits">
            <a>les produits</a>
          </Link>
          <br></br>
          <Link href="/personnage">
            <a>les personnages</a>
          </Link>
          <br></br>
          <Link href="/vitalite">
            <a>vitalité</a>
          </Link>
          <br></br>
          <Link href="/collection">
            <a>nos collections</a>
          </Link>
          La<br></br> juxtaposition du <br></br>
          <strong>logique</strong> et du<br></br>
          <strong>créatif</strong> +
        </h1>
        <h2 id="nom-college">Collège de Maisonneuve</h2>
      </main>
      <aside>
        <img src="https://images.unsplash.com/photo-1599666433232-2b222eb02b8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
        <div className="conteneur-bouton">
          <button className="bouton-explorer">EXPLOREZ</button>
        </div>
      </aside>

      {/*il est préférable que vous utlisiez du css "local" et non "global"
      Cela fait que le css n'affecte rien d'autre que cette page, ce composant ou ce fichier, ce qui évite les erreurs.
      Cela se fait facilement à même le fichier js en utilisant la balise style jsx
      comme ci-dessous. .*/}
      <style jsx>{`
        
        .conteneur-page {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          max-width: 1500px;
          margin-top: 3rem;
          padding-top: 3rem;
        }

        main {
          height: 70vh;
          border-left: 3px solid white;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        h1 {
          a {
            &:link,
            &:visited,
            &:hover,
            &:active {
              color: green;
            }
          }
        }

        .titre-intro {
          color: #ffffff;
          font-size: 4.5rem;
          padding-left: 25px;
        }

        #nom-college {
          color: #ffffff;
          font-size: 30px;
          padding-left: 25px;
        }

        aside {
          height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;

          img {
          z-index: 1;
          width: auto;
          height: 100%;
          }

        }

        .conteneur-bouton {
          position: relative;
          height: 0 px;
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }

        .bouton-explorer {
          position: absolute;
          top: -2rem;
          background-color: #fff;
          border-radius: 50%;
          height: 8rem;
          width: 8rem;
          z-index: 2;
        }
      `}</style>
    </div>
  );
}
