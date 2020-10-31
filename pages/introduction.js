import { motion } from "framer-motion";
import { Canvas } from "react-three-fiber";
import CubeTransparent from "../components/3d/CubeTransparent";
import styles from "./introduction.module.scss";
import Link from "next/link";

export default function Introduction() {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ opacity: 0 }}
      className={styles.conteneur}
    >
      <h1 className={styles.headerPage}>
        Envie d'étudier le <b>multimédia ?</b>
      </h1>
      <div className={styles.conteneurCube}>
        <Canvas style={{ width: "100%", height: "100%", overflow: "none" }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <CubeTransparent position={[0, 0, 0]} scale={[3, 3, 3]} />
        </Canvas>
      </div>

      <p className={styles.textePage}>
        Le TIM c’est l’endroit parfait pour étudier les nouvelles technologies
        de l’industrie. On fait de la programmation, des jeux, de la vidéo, de
        la VR, de la photographie, des sites internets, de l’animation et de la
        3D.
      </p>

      <Link href="/cours">
        <motion.button
          whileHover={{ scale: 1.3 }}
          className={styles.boutonCours}
        >
          LISTE DES COURS
        </motion.button>
      </Link>
    </motion.div>
  );
}
