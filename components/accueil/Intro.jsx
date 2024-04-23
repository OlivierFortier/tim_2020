import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./intro.module.scss";

export default function Intro({ changerEtape }) {
  useEffect(() => {
    document.querySelector("#header-site").style.display = "none";
    document.querySelector("#navSecondaire").style.display = "none";
    document.querySelector("#racine").style.overflowY = "hidden";
  }, []);

  // variables pour le faux chargement
  const [chargement, setChargement] = useState(0);

  // faux chargement
  useEffect(() => {
    if (chargement === 100) return () => clearInterval(intervalle);

    const intervalle = setInterval(() => {
      setChargement((ancienChargement) => ancienChargement + 1);
    }, 10);
    return () => clearInterval(intervalle);
  }, [chargement]);

  return (
    <motion.div
      layout
      initial={{
        y: 200,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, stiffness: 90 }
      }}
      exit={{
        y: -300,
        opacity: 0,
        transition: { duration: 0.7, ease: "easeInOut" }
      }}
      className={styles.introConteneur}
    >
      <h1>TECHNIQUES D&apos;INTÉGRATION MULTIMÉDIA</h1>
      <Image
        width={403}
        height={198}
        quality={5}
        src="/images/intro-logo-tim.svg"
        alt="Logo des Techniques d'Intégration Multimédia du Collège Maisonneuve"
        className={styles.logo}
      />
      <h2 className={styles.texteIntro}>
        Votre expérience unique commence dès maintenant...
      </h2>
      {chargement !== 100 && (
        <h2 className={styles.texteChargement}>{chargement}%</h2>
      )}
      {chargement === 100 && (
        <button
          className={`${styles.texteChargement} ${styles.souligne}`}
          onClick={() => changerEtape("profil")}
        >
          Entrez
        </button>
      )}
    </motion.div>
  );
}
