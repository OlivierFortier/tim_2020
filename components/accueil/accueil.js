import Link from "next/link"

export default function Accueil() {

  const padding_left_texte = "55px";

  return (
    <>
      <main>
        <h1 className="titre-intro">
          La<br></br> juxtaposition du <br></br>
          <strong>logique</strong> et du<br></br>
          <strong>créatif +</strong> 
        </h1>
        <h2 id="nom-college">Collège de Maisonneuve</h2>
      </main>
      <aside>
        <span>
          <div className="cercle-interractif"></div>
        </span>
        <img
          alt="image du theme"
          src="https://images.unsplash.com/photo-1599666433232-2b222eb02b8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        ></img>
        <div className="conteneur-bouton">
          <Link href="/cours" as="/cours">
            <button className="bouton-explorer" aria-label="explorer">
              EXPLOREZ
            </button>
          </Link>
        </div>
      </aside>

      <style jsx>{`
        @import "styles/variables";

        main {
          height: 70vh;
          border-left: 5px solid white;
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
          color: #F3F1F1;
          font-family: NeueMontreal;
          font-size: 72px;
          font-weight: 300;
          text-transform: uppercase;
          line-height: 86px;
          margin: 0;
          padding-left: ${padding_left_texte};

          strong {
            font-weight: 700;
            font-style: italic;
          }
        }

        #nom-college {
          color: #ffffff;
          font-size: 36px;
          font-family: Montserrat;
          font-weight: normal;
          padding-left: ${padding_left_texte};
        }

        aside {
          height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;

          span {
            position: relative;
            display: flex;
            justify-content: flex-start;
            width: 100%;

            .cercle-interractif {
              position: absolute;
              right: 70%;
              top: -3rem;
              height: $taille-cercle-accueil;
              width: $taille-cercle-accueil;
              border-radius: 50%;
              border: 2px solid white;
              z-index: 3;
            }
          }

          img {
            z-index: 1;
            width: auto;
            max-height: 100%;
          }
        }

        .conteneur-bouton {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }

        .bouton-explorer {
          position: absolute;
          top: -4rem;
          background-color: #fff;
          border-radius: 50%;
          height: 144px;
          width: 144px;
          z-index: 2;
          font-style: normal;
          font-weight: normal;
          font-size: 19px;
          line-height: 23px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
