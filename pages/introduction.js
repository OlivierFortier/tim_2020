import { motion } from "framer-motion";
import styles from "./introduction.module.scss";

export default function Introduction() {
  return (
    <motion.div exit={{ opacity: 0 }} className={styles.conteneur}>
      <h1 className={styles.headerPage}>
        Envie d'étudier le <b>multimédia ?</b>
      </h1>
      <div className={styles.conteneurCube}>
        <h3>un cube</h3>
      </div>

      <p className={styles.textePage}>
        Le TIM c’est l’endroit parfait pour étudier les nouvelles technologies
        de l’industrie. On fait de la programmation, des jeux, de la vidéo, de
        la VR, de la photographie des sites internets, de l’animation et de la
        3D.
      </p>

      <button className={styles.boutonCours}>LISTE DES COURS</button>
    </motion.div>
  );
}
