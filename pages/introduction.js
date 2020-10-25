import { motion } from "framer-motion";
import { Canvas } from "react-three-fiber";
import CubeTransparent from "../components/3d/CubeTransparent";
import styles from "./introduction.module.scss";

export default function Introduction() {
  return (
    <motion.div exit={{ opacity: 0 }} className={styles.conteneur}>
      <h1 className={styles.headerPage}>
        Envie d'étudier le <b>multimédia ?</b>
      </h1>
      <div className={styles.conteneurCube}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <CubeTransparent position={[0,0,0]}/>
        </Canvas>
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
