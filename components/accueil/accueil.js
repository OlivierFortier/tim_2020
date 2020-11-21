import Link from "next/link";
import styles from "./accueil.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme, useListeThemes } from "../../hooks/contexteTheme";

export default function Accueil() {
  const theme = useTheme();
  const listeThemes = useListeThemes();

  const [videoSource, setVideoSource] = useState("");
  const [videoIsHovered, setVideoIsHovered] = useState(false);

  const setHoverState = (value) => {
    setVideoIsHovered((currentValue) => value);
  };
  const animationVideo = {
    open: {
      scaleX: 4,
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
    closed: {
      scaleX: 1,
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    document.querySelector("#header-site").style.display = "flex";

    switch (theme) {
      case listeThemes.art:
        setVideoSource((ancienneVideo) => "/images/art.webm");
        document.documentElement.style.setProperty(
          "--bgAcceuil",
          'url("/images/art_Moment.jpg")'
        );
        break;

      case listeThemes.code:
        setVideoSource((ancienneVideo) => "/images/code.webm");
        document.documentElement.style.setProperty(
          "--bgAcceuil",
          'url("/images/code_Moment.jpg")'
        );
        break;

      case listeThemes.parent:
        setVideoSource((ancienneVideo) => "");
        document.documentElement.style.setProperty("--bgAcceuil", "#110c12");
        break;

      default:
        setVideoSource((ancienneVideo) => "/images/art.webm");
        document.documentElement.style.setProperty(
          "--bgAcceuil",
          'url("/images/art_Moment.jpg")'
        );
        break;
    }
  }, [videoSource, theme]);

  return (
    <>
      <motion.div
        layout
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { duration: 0.7 },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 1, ease: "easeIn" },
        }}
        className={styles.conteneurAccueil}
      >
        <motion.main
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          className={styles.accueilMain}
        >
          <h1 className={styles.titreIntro}>
            La<br></br> juxtaposition du <br></br>
            <strong>logique</strong> et du <br></br>
            <strong>créatif +</strong>
          </h1>
          <h2 className={styles.nomCollege}>Collège de Maisonneuve</h2>
        </motion.main>
        <aside className={styles.accueilAside}>
          <Link href="/introduction">
            <motion.h2 whileTap={{scale: 1.5}}>CONTINUER</motion.h2>
          </Link>
          <span>
            <motion.div
              initial={{
                x: 0,
                y: 0,
              }}
              animate={{
                x: `${Math.random() * 20}px`,
                y: `${Math.random() * 20}px`,
                transition: {
                  repeat: Infinity,
                  duration: 5,
                  repeatType: "mirror",
                },
              }}
              className={styles.cercleInterractif}
            ></motion.div>
          </span>
          <div className={styles.conteneurImage}>

            {videoSource && (
              <motion.video
                initial={{ opacity: 1,  }}
                animate={videoIsHovered ? "open" : "closed"}
                onHoverStart={(e) => {
                  setHoverState(true);
                }}
                onHoverEnd={(e) => {
                  setHoverState(false);
                }}
                variants={animationVideo}
                key={videoSource}
                loop={true}
                className={styles.imageHero}
                width={451}
                height={684}
                autoPlay={true}
                muted
                playsInline
              >
                <source src={videoSource} type="video/webm" />
              </motion.video>
            )}
          </div>
          <div className={styles.conteneurBouton}>
            <Link href="/introduction">
              <motion.button
                className={styles.boutonExplorer}
                aria-label="explorer"
                whileHover={{
                  scale: 1.05,
                }}
              >
                EXPLOREZ
              </motion.button>
            </Link>
          </div>
        </aside>
      </motion.div>
    </>
  );
}
