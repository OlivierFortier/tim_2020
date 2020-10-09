export default function DetailsCours({infoCours, afficherCours}) {
    return (
      <div>
        <button onClick={afficherCours}>
          retour aux autres cours
        </button>
        <p>{infoCours.description}</p>
      </div>
    );
}