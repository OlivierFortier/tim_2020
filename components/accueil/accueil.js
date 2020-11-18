import Link from "next/link";
import styles from "./accueil.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme, useListeThemes } from "../../hooks/contexteTheme";

export default function Accueil() {
  useEffect(() => {
    document.querySelector("#header-site").style.display = "flex";
    document.documentElement.style.setProperty(
      "--bgAcceuil",
      'url("/images/photo1.jpg")'
    );
  }, []);

  const theme = useTheme();
  const listeThemes = useListeThemes();

  const [videoSource, setVideoSource] = useState("");

  useEffect(() => {
    switch (theme) {
      case listeThemes.art:
        setVideoSource(ancienneVideo => "/images/art.webm");
        break;

      case listeThemes.code:
        setVideoSource(ancienneVideo => "/images/code.webm");
        break;

      case listeThemes.parent:
        setVideoSource(ancienneVideo => "");
        break;

      default:
        setVideoSource(ancienneVideo => "/images/art.webm");
        break;
    }
  }, [videoSource]);

  return (
    <>
      <motion.div
        layout
        initial={{
          x: 1000,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        exit={{
          x: -1000,
          opacity: 0,
        }}
        className={styles.conteneurAccueil}
      >
        <main className={styles.accueilMain}>
          <h1 className={styles.titreIntro}>
            La<br></br> juxtaposition du <br></br>
            <strong>logique</strong> et du <br></br>
            <strong>créatif +</strong>
          </h1>
          <h2 className={styles.nomCollege}>Collège de Maisonneuve</h2>
        </main>
        <aside className={styles.accueilAside}>
          <h2>DÉROULEZ LA BARRE POUR CONTINUER</h2>
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
            {/* <Image
              className={styles.imageHero}
              alt="image du theme"
              width={451}
              height={684}
              quality={75}
              loading="eager"
              priority
              layout="responsive"
              src="/images/photo1.jpg"
            /> */}
            {videoSource && (
              <video
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
              </video>
            )}
          </div>
          <div className={styles.conteneurBouton}>
            <Link href="/introduction">
              <motion.button
                className={styles.boutonExplorer}
                aria-label="explorer"
                whileHover={{
                  scale: 1.3,
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
