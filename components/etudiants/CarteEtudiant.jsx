import styles from "./Carte.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function CarteProf({ infoCarte, ouvrirModal }) {
  return (
    <div className={styles.unInfo} onClick={() => ouvrirModal(infoCarte)}>
      {infoCarte?.photo?.url ? (
        <Image
          unsized
          layout="fill"
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
    </div>
    // <Link href={`/etudiants/${"yeet"}`}>
    // </Link>
  );
}
