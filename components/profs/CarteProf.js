import styles from "./CarteProf.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function CarteProf({ prof }) {
  return (
    <Link href={`/professeurs/${prof.slug}`}>
      <div className={styles.unProf}>
        {prof?.photo?.url ? (
          <Image
            unsized
            layout="fill"
            src={prof?.photo?.url}
            loading="eager"
            quality={1}
            className={styles.imgProf}
            alt={`photo de ${prof.nom}`}
          />
        ) : (
          <Image
            quality={1}
            src="/images/cam.jpg"
            loading="eager"
            className={styles.imgProf}
            alt={`photo de ${prof.nom}`}
          />
        )}
        <h3 className={styles.nomProf}>{prof.nom}</h3>
        <h4 className={styles.specialisationProf}>{prof.specialisation}</h4>
      </div>
    </Link>
  );
}
