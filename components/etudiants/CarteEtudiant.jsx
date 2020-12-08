import styles from "./Carte.module.scss";
import Image from "next/image";
import {motion} from "framer-motion";

export default function CarteProf({ infoCarte, ouvrirModal }) {
  return (
    <motion.div layout layoutId="photo" whileHover={{scale: 1.013}} whileTap={{scale: 1.010}} className={styles.unInfo} onClick={() => ouvrirModal(infoCarte)}>
      {infoCarte?.photo?.url ? (
        <Image
          unsized
          layout="fill"
          src={infoCarte?.photo?.url}
          loading="lazy"
          quality={1}
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
            quality={1}
            className={styles.imgInfo}
            alt={`photo de ${"yeet"}`}
          />
        </span>
      )}
    </motion.div>
  );
}
