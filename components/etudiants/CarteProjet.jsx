import styles from "./Carte.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function CarteProf({ infoCarte }) {
  return (
    <Link href={`/etudiants/${infoCarte.slug}`}>
      <div className={styles.unInfo}>
        {infoCarte?.captureDcran?.url ? (
          <Image
            layout="fill"
            unsized
            src={infoCarte?.captureDcran?.url}
            loading="lazy"
            quality={1}
            className={styles.imgInfo}
            alt={`photo de ${"infoCarte.nom"}`}
          />
        ) : (
          <span className={styles.conteneurImage}>
            <Image
              layout="fill"
              unsized
              quality={1}
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
