export default function NomCours({ infoCours, afficherCours }) {

  //TODO : gestion de l'icone selon le type du cours

  return (
    <div onClick={afficherCours} className="cours">
      <h3>{infoCours.titre}</h3>
      {infoCours.choixEntre && <i>choix entre {infoCours.choixEntre.titre}</i>}
      <span>
        <ul>
          {infoCours.types &&
            infoCours.types.map((type, index) => {
              return <li key={Math.random() * index}>{type}</li>;
            })}
        </ul>
      </span>

      <style jsx>{`
        .cours {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}
