import styles from "./CarteProf.module.scss";

export default function CarteProf({ prof }) {

  return (
    <div className={styles.unProf}>
      {prof?.photo?.url ? (
        <img src={prof?.photo?.url} className={styles.imgProf} alt={`photo de ${prof.nom}`} />
      ) : (
        <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
      )}
      <h3>{prof.nom}</h3>
      <h4>{prof.specialisation}</h4>
    </div>
  );
}
