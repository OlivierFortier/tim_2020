import styles from "./Carte.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CarteProjet({ infoCarte }) {
  return (
    <Link href={`/etudiants/${infoCarte.slug}`}>
      <button>
        <motion.div
          whileHover={{ scale: 1.013 }}
          whileTap={{ scale: 1.01 }}
          className={styles.unInfo}
        >
          {infoCarte?.captureDcran?.url ? (
            <Image
              layout="fill"
              unsized
              src={infoCarte?.captureDcran?.url}
              loading="lazy"
              quality={1}
              className={styles.imgInfo}
              alt={`photo de ${infoCarte.titreDuProjet}`}
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
                alt={`photo de projet`}
              />
            </span>
          )}
        </motion.div>
      </button>
    </Link>
  );
}
