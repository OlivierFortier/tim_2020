

export default function Accueil() {

 

  return (
    <>
      <main>
        <h1 className="titre-intro">
          La<br></br> juxtaposition du <br></br>
          <strong>logique</strong> et du<br></br>
          <strong>créatif</strong> +
        </h1>
        <h2 id="nom-college">Collège de Maisonneuve</h2>
      </main>
      <aside>
        <img
          alt="image du theme"
          src="https://images.unsplash.com/photo-1599666433232-2b222eb02b8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        ></img>
        <div className="conteneur-bouton">
          <button className="bouton-explorer" aria-label="explorer">
            EXPLOREZ
          </button>
        </div>
      </aside>

      <style jsx>{`
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
          font-family: NeueMontreal;
          font-size: 72px;
          font-weight: 300;
          text-transform: uppercase;
          padding-left: 25px;

          strong {
            font-weight: 700;
            font-style: italic;
          }

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
    </>
  );
}
