import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div className="conteneur-page">
      <main>
        <h1 className="titre-intro">
          La<br></br> juxtaposition du <br></br>
          <strong>logique</strong> et du<br></br>
          <strong>créatif</strong> +
        </h1>
        <h2 id="nomCollege">Collège de Maisonneuve</h2>
      </main>
      <aside>
        <img
          width="451"
          height="684"
          src="https://images.unsplash.com/photo-1599666433232-2b222eb02b8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        ></img>
        <button className="boutonExplorez">EXPLOREZ</button>
      </aside>

      {/*il est préférable que vous utlisiez du css "local" et non "global"
      Cela fait que le css n'affecte rien d'autre que cette page, ce composant ou ce fichier, ce qui évite les erreurs.
      Cela se fait facilement à même le fichier js en utilisant la balise style jsx
      comme ci-dessous */}
      <style jsx>{`
        .conteneur-page {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        main {
          height: 70vh;
          width: 50vw;
          padding-top: 8vh;
          padding-bottom: 8vh;
          border-left: 3px solid white;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .titre-intro {
          color: #ffffff;
          font-size: 4em;
          padding-left: 25px;
          padding-top: 28vh;
        }

        #nomCollege {
          color: #ffffff;
          font-size: 30px;
          padding-left: 25px;
        }

        aside > img {
          z-index: 1;
        }

        .boutonExplorez {
          position: absolute;
          bottom: -48px;
          transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          background-color: #fff;
          border-radius: 50%;
          padding-top: 5vh;
          padding-bottom: 5vh;
          margin-top: auto;
          margin-right: 15px;
        }
      `}</style>
    </div>
  );
}
