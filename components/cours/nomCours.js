export default function NomCours({ infoCours }) {
  //TODO : gestion de l'icone selon le type du cours

  return (
    <div className="cours">
      <h3>{infoCours.titre}</h3>
      <span>
        <ul>
          {infoCours.type &&
            infoCours.type.map((type, index) => {
              return <li key={Math.random()*index}>{type}</li>;
            })}
        </ul>
      </span>

      <style jsx>{`
        .cours {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}
