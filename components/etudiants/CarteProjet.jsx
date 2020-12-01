import styles from "./Carte.module.scss";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

export default function CarteProf({ infoCarte }) {
  return (
    <Link href={`/etudiants/${infoCarte.slug}`}>
      <a >
        <motion.div whileHover={{scale: 0.9}} whileTap={{scale: 0.9}} className={styles.unInfo}>
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
        </motion.div>
      </a>
    </Link>
  );
}
