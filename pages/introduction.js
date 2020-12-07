import { motion } from "framer-motion";
import styles from "./introduction.module.scss";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useListeThemes, useTheme } from "../hooks/contexteTheme";
import Canvas3D from "../components/3d/Canvas3D";
import dynamic from "next/dynamic";
import Chargement from "../components/Chargement";

// charger le cube 3D dynamiquement pour réduire le temps de chargement de la page
const CanvasDynamique = dynamic(() => import("../components/3d/Canvas3D"), {
  ssr: false,
  loading: () => <Chargement />,
});

export default function Introduction() {
  // changer couleur selon theme
  const theme = useTheme();
  const listeThemes = useListeThemes();
  const [lesStyles, setLesStyles] = useState({
    couleurCube: "#f3f1f1",
    couleurTexte: "#f3f1f1",
    couleurBouton: "#f3f1f1",
    couleurTexteBouton: "#000000",
    couleurHover: "#F04E2A",
  });

  useEffect(() => {
    switch (theme) {
      case listeThemes.art:
        setLesStyles({
          couleurCube: "#f3f1f1",
          couleurTexte: "#f3f1f1",
          couleurBouton: "transparent",
          couleurTexteBouton: "#f3f1f1",
          couleurHover: "#F16242",
        });
        break;

      case listeThemes.code:
        setLesStyles({
          couleurCube: "#f3f1f1",
          couleurTexte: "#f3f1f1",
          couleurBouton: "transparent",
          couleurTexteBouton: "#FFFFFF",
          couleurHover: "#24DC48",
        });
        break;

      case listeThemes.parent:
        setLesStyles({
          couleurCube: "black",
          couleurTexte: "#000000",
          couleurBouton: "transparent",
          couleurTexteBouton: "#000000",
          couleurHover: "#4363CA",
        });
        break;

      default:
        setLesStyles({
          couleurCube: "#f3f1f1",
          couleurTexte: "#f3f1f1",
          couleurBouton: "transparent",
          couleurTexteBouton: "#000000",
          couleurHover: "#F04E2A",
        });
        break;
    }
  }, [theme]);

  return (
    <motion.div
      initial={{
        x: 25,
        opacity: 0,
        transition: { ease: "easeInOut", duration: 0.5 },
      }}
      transition={{ duration: 0.75 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={{
        y: -100,
        opacity: 0,
        transition: { ease: "linear", duration: 0.4 },
      }}
      className={styles.conteneur}
      key="introduction"
    >
      <Head>
        <title>TIM | Introduction</title>
        <meta
          name="Description"
          content="Page d'introduction des Techniques d'Intégration Multimédia du Collège Maisonneuve"
        ></meta>
        <link
          rel="canonical"
          href="https://tim-2020.vercel.app/introduction"
        ></link>
        <meta property="og:title" content="Introduction | TIM Maisonneuve" />
        <meta
          property="og:url"
          content="https://tim-2020.vercel.app/introduction"
        />
        <meta
          property="og:description"
          content="Page d'introduction des Techniques d'Intégration Multimédia du Collège Maisonneuve"
        />
      </Head>

      <Link href="/cours">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.9 } }}
          className={styles.headerPage}
        >
          Envie d'étudier le{" "}
          <motion.b
            animate={{ color: lesStyles.couleurTexte }}
            whileHover={{ color: lesStyles.couleurHover }}
          >
            multimédia ?
          </motion.b>
        </motion.h1>
      </Link>
      <motion.div
        initial={{ opacity: 0, x: 5, y: -5 }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 2, ease: "linear" },
        }}
        className={styles.conteneurCube}
      >
        <CanvasDynamique
          classeCanvas={styles.Canvas3D}
          couleurDuMesh={lesStyles.couleurCube}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.9, delay: 0.6 },
        }}
        className={styles.textePage}
      >
        Le TIM c’est l’endroit parfait pour étudier les nouvelles technologies
        de l’industrie. On fait de la programmation, des jeux, de la vidéo, de
        la VR, de la photographie, des sites internets, de l’animation et de la
        3D.
      </motion.p>

      <Link href="/cours">
        <a
          style={{ color: lesStyles.couleurTexte }}
          className={styles.lienCours}
        >
          LISTE DES COURS
        </a>
      </Link>

      <Link href="/cours">
        <motion.button
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
            color: lesStyles.couleurHover,
            borderColor: lesStyles.couleurHover,
          }}
          className={styles.boutonCours}
          style={{
            backgroundColor: lesStyles.couleurBouton,
          }}
          animate={{
            color: lesStyles.couleurTexteBouton,
            borderColor: lesStyles.couleurTexteBouton,
          }}
        >
          LISTE DES COURS
        </motion.button>
      </Link>
    </motion.div>
  );
}
