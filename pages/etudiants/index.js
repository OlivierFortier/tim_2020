import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useListeThemes, useTheme } from "../../hooks/contexteTheme";
import styles from "./etudiants.module.scss";

export default function index() {
  const [imageSurvol, setImageSurvol] = useState("ETUDIANT.png");

  const theme = useTheme();
  const listeThemes = useListeThemes();
  const [lesStyles, setLesStyles] = useState({
    couleurLigne: "#f3f1f1",
    classeFiltre : styles.conteneurEffetImageArt
  });



  useEffect(() => {
    switch (theme) {
      case listeThemes.art:
        setLesStyles({
          couleurLigne: "#f3f1f1",
          classeFiltre : styles.conteneurEffetImageArt
        });
        break;

      case listeThemes.code:
        setLesStyles({
          couleurLigne: "#f3f1f1",
          classeFiltre : styles.conteneurEffetImageCode
        });
        break;

      case listeThemes.parent:
        setLesStyles({
          couleurLigne: "black",
          classeFiltre : styles.conteneurEffetImage
        });
        break;

      default:
        setLesStyles({
          couleurLigne: "#f3f1f1",
          classeFiltre : styles.conteneurEffetImageArt
        });
        break;
    }
  }, [theme]);

  return (
    <motion.div
      className={styles.conteneurPage}
      exit={{ opacity: 0 }}
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{duration: 0.75}}
      key="etudiants"
    >
      <Head>
        <title>TIM | Étudiants</title>
        <meta
          name="Description"
          content="Page de la vie étudiante des Techniques d'Intégration Multimédia du Collège Maisonneuve"
        ></meta>
        <link
          rel="canonical"
          href="https://tim-2020.vercel.app/etudiants"
        ></link>
        <meta property="og:title" content="Vie étudiante | TIM Maisonneuve" />
        <meta property="og:url" content="https://tim-2020.vercel.app/etudiants" />
        <meta
          property="og:description"
          content="Page de la vie étudiante des Techniques d'Intégration Multimédia du Collège Maisonneuve"
        />
      </Head>

      <main className={styles.wrapperContenu}>
        <section className={styles.contenu}>
          <Link href="/etudiants/projets">
            <motion.h1
              className={styles.projets}
              onHoverStart={() => setImageSurvol("projet.png")}
              whileHover={{x: 5}}
              whileTap={{x: 5}}
            >
              Projets étudiants
            </motion.h1>
          </Link>
          <span className={styles.ligne} style={{borderColor: lesStyles.couleurLigne}}></span>
          <Link href="/etudiants/gallerie">
            <motion.h1
              className={styles.vie}
              onHoverStart={() => setImageSurvol("ETUDIANT.png")}
              whileHover={{x: -5}}
              whileTap={{x: -5}}
            >
              Vie étudiante
            </motion.h1>
          </Link>
        </section>
        <div className={styles.conteneurImage}>
          <span className={lesStyles.classeFiltre}>
            <Image
              src={`/images/${imageSurvol}`}
              loading="eager"
              layout="fill"
              quality={50}
              unsized
              alt="photo représentant la vie étudiante et les projets étudiants"
            />
          </span>
        </div>
      </main>
    </motion.div>
  );
}
