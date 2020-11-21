import { motion } from "framer-motion";
import { Canvas } from "react-three-fiber";
import CubeTransparent from "../components/3d/CubeTransparent";
import styles from "./introduction.module.scss";
import Link from "next/link"
import Head from "next/head";

export default function Introduction() {
  return (
    <motion.div
      initial={{ x: 5, opacity: 0, transition:{ ease: "easeInOut", duration: 0.5}}}
      animate={{ x: 0, opacity: 1}}
      exit={{ x: -40, opacity: 0,  transition: {ease: "linear", duration: 0.2}}}
      className={styles.conteneur}
    >
     <Head>
        <title>TIM | Introduction</title>
        <meta charset="UTF-8"></meta>
        <meta name="Description"
              content="Page d'introduction de la technique d'Intégration Multimédia du collège Maisonneuve"
        ></meta>
        <link rel="canonical" href="https://tim-2020.vercel.app/introduction"></link>
      </Head>

      <h1 className={styles.headerPage}>
        Envie d'étudier le <b>multimédia ?</b>
      </h1>
      <motion.div 
      initial={{ opacity: 0, x: 5, y: -5}}
      animate={{ opacity: 1, x: 0, y: 0, transition:{ duration: 2, ease: "linear"}}}
      className={styles.conteneurCube}>
        <Canvas className={styles.canvas3D}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <CubeTransparent position={[0, 0, 0]} scale={[3, 3, 3]} />
        </Canvas>
      </motion.div>

      <p className={styles.textePage}>
        Le TIM c’est l’endroit parfait pour étudier les nouvelles technologies
        de l’industrie. On fait de la programmation, des jeux, de la vidéo, de
        la VR, de la photographie, des sites internets, de l’animation et de la
        3D.
      </p>

      <Link href="/cours">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={styles.boutonCours}
        >
          LISTE DES COURS
        </motion.button>
      </Link>
    </motion.div>
  );
}
