import styles from "./CarteProf.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CarteProf({ prof }) {
  return (
    <Link href={`/professeurs/${prof.slug}`}>
      <a>
        <motion.div
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.9 }}
          className={styles.unProf}
        >
          {prof?.photo?.url ? (
            <Image
              unsized
              layout="fill"
              src={prof?.photo?.url}
              loading="lazy"
              quality={1}
              className={styles.imgProf}
              alt={`photo de ${prof.nom}`}
            />
          ) : (
            <Image
              quality={1}
              src="/images/cam.jpg"
              loading="lazy"
              className={styles.imgProf}
              alt={`photo de ${"placeholder"}`}
            />
          )}
          <h3 className={styles.nomProf}>{prof.nom}</h3>
          <h4 className={styles.specialisationProf}>{prof.specialisation}</h4>
        </motion.div>
      </a>
    </Link>
  );
}
