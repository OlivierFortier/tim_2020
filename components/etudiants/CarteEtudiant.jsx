import styles from "./CarteEtudiant.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function CarteProf({ infoCarte, ouvrirModal }) {
  return (
    <div className={styles.unInfo} onClick={() => ouvrirModal(infoCarte)}>
      {infoCarte?.photo?.url ? (
        <Image
          width={250}
          height={250}
          src={infoCarte?.photo?.url}
          loading="lazy"
          className={styles.imgInfo}
          alt={`photo de ${infoCarte.nom}`}
        />
      ) : (
        <span className={styles.conteneurImage}>
          <Image
            layout="fill"
            unsized
            src="/images/cam.jpg"
            loading="lazy"
            className={styles.imgInfo}
            alt={`photo de ${"yeet"}`}
          />
        </span>
      )}
      {infoCarte && <h3>{infoCarte.nom}</h3>}
      {infoCarte && <h4>{infoCarte.specialisation}</h4>}
    </div>
    // <Link href={`/etudiants/${"yeet"}`}>
    // </Link>
  );
}
