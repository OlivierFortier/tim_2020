import { motion } from "framer-motion";
import styles from "./professeurs.module.scss";
import Link from "next/link";

export default function Professeurs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.conteneur}
    >
      <div className={styles.sectionLesProfs}>
        <h1>LES PROFESSEURS</h1>
        <h3>QUI SONT-ILS?</h3>
      </div>
      <div className={styles.sectionImages}>
        <img src="/images/cam.jpg" alt=""/>
        <img src="/images/cam.jpg" alt=""/>
        <img src="/images/cam.jpg" alt=""/>
        <img src="/images/cam.jpg" alt=""/>
        <img src="/images/cam.jpg" alt=""/>
        <img src="/images/cam.jpg" alt=""/>
        <img src="/images/cam.jpg" alt=""/>
        <img src="/images/cam.jpg" alt=""/>
        <img src="/images/cam.jpg" alt=""/>
      </div>
      <div className={styles.sectionTexte}>
        <h2>
          PLUS++DE 25 ANS D'EXPÉRIENCE DANS LE DOMAINE POUR VOUS DONNER LA MEILLEURE ÉDUCATION
        </h2>
        <Link href="/professeurs/grille">
          <a>voir la grille</a>
        </Link>
      </div>
    </motion.div>
  );
}
