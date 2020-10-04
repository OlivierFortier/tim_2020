export default function SelectionProfil() {
  return (
    <>
      <div className="conteneur-profils">
        <h1>Sélectionnez votre profil</h1>
        <div className="grille-profils">
          <span id="art">
            <h2>Artiste Digital</h2>
          </span>
          <span id="code">
            <h2>
              Pirate <br /> Informatique
            </h2>
          </span>
          <span id="parent">
            <h2>Parent</h2>
          </span>
          <h2 id="rapide">Accéder au site directement</h2>
        </div>
      </div>
      <style jsx>{`
        .conteneur-profils {
          color: white;
          border-left: 3px solid white;
        }

        .grille-profils {
          display: grid;
          grid-template:
            "art . code" 200px
            ". parent ." 200px
            ". . rapide" auto
            / 200px 200px 200px;
        }

        #art,
        #code,
        #parent {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          border: 2px solid red;
          text-align: center;
        }

        #art {
          grid-area: art;
          border-color: #eb601c;
        }

        #code {
          grid-area: code;
          border-color: #34a241;
        }

        #parent {
          grid-area: parent;
          border-color: #c4c4c4;
        }

        #rapide {
            grid-area: rapide;
        }
      `}</style>
    </>
  );
}
