import styles from "./CarteProf.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function CarteProf({ prof }) {
  return (
    <Link href={`/professeurs/${prof.slug}`}>
      <div className={styles.unProf}>
        {prof?.photo?.url ? (
          <Image
            width={250}
            height={250}
            src={prof?.photo?.url}
            loading="lazy"
            className={styles.imgProf}
            alt={`photo de ${prof.nom}`}
          />
        ) : (
          <Image
            width={250}
            height={250}
            src="/images/cam.jpg"
            loading="lazy"
            className={styles.imgProf}
            alt={`photo de ${prof.nom}`}
          />
        )}
        <h3>{prof.nom}</h3>
        <h4>{prof.specialisation}</h4>
      </div>
    </Link>
  );
}
