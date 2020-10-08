export default function NomCours({ infoCours }) {
  return (
    <div className="cours">
      <h3>Mise en page web</h3>
      <span>icone</span>

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
