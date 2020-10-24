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
        {/* <span className={styles.positionLesProfs}> */}
        <h1>LES PROFESSEURS</h1>
        <h3>QUI SONT-ILS?</h3>
        {/* </span> */}
      </div>
      <div className={styles.sectionImages}>
        <span>
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1, x: "-80%", y: "0%" }}
            src="/images/cam.jpg"
            alt=""
          />
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1, x: "150%", y: "-100%", scale: 1.4 }}
            src="/images/cam.jpg"
            alt=""
          />
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1, x: "100%", y: "140%" }}
            src="/images/cam.jpg"
            alt=""
          />
        </span>
        <span>
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1, scale: 3 }}
            src="/images/cam.jpg"
            alt=""
          />
        </span>
        <span>
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1, x: "-120%", y: "-200%", scale: 0.9 }}
            src="/images/cam.jpg"
            alt=""
          />
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1, x: "100%", y: "-140%" }}
            src="/images/cam.jpg"
            alt=""
          />
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1, x: "70%", y: "40%" }}
            src="/images/cam.jpg"
            alt=""
          />
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1, x: "-160%", y: "100%", scale: 1.4 }}
            src="/images/cam.jpg"
            alt=""
          />
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1, x: "50%", y: "340%", scale: 2.5 }}
            src="/images/cam.jpg"
            alt=""
          />
        </span>
      </div>
      <div className={styles.sectionTexte}>
        <h2>
          PLUS<b>++</b>DE <b>25 ANS</b> D'EXPÉRIENCE DANS LE DOMAINE POUR VOUS
          DONNER <b>LA MEILLEURE ÉDUCATION</b>
        </h2>
        <Link href="/professeurs/grille">
          <a>voir la grille</a>
        </Link>
      </div>
    </motion.div>
  );
}
