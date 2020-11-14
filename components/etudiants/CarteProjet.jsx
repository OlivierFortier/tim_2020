import styles from "./Carte.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function CarteProf({ infoCarte }) {
  return (
    <Link href={`/etudiants/${"yeet"}`}>
      <div className={styles.unInfo}>
        {infoCarte?.captureDcran?.url ? (
          <Image
            width={250}
            height={250}
            src={infoCarte?.captureDcran?.url}
            loading="lazy"
            className={styles.imgInfo}
            alt={`photo de ${"infoCarte.nom"}`}
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
    </Link>
  );
}
