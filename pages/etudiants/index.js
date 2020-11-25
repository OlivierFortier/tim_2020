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
  });

  useEffect(() => {
    switch (theme) {
      case listeThemes.art:
        setLesStyles({
          couleurLigne: "#f3f1f1",
        });
        break;

      case listeThemes.code:
        setLesStyles({
          couleurLigne: "#f3f1f1",
        });
        break;

      case listeThemes.parent:
        setLesStyles({
          couleurLigne: "black",
        });
        break;

      default:
        setLesStyles({
          couleurLigne: "#f3f1f1",
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
    >
      <Head>
        <title>TIM | Étudiants</title>
        <meta charset="UTF-8"></meta>
        <meta
          name="Description"
          content="Page de la vie étudiante de la technique d'Intégration Multimédia du collège Maisonneuve"
        ></meta>
        <link
          rel="canonical"
          href="https://tim-2020.vercel.app/etudiants"
        ></link>
      </Head>

      <main className={styles.wrapperContenu}>
        <section className={styles.contenu}>
          <Link href="/etudiants/projets">
            <motion.h1
              className={styles.projets}
              onHoverStart={() => setImageSurvol("projet.png")}
            >
              Projets étudiants
            </motion.h1>
          </Link>
          <span className={styles.ligne} style={{borderColor: lesStyles.couleurLigne}}></span>
          <Link href="/etudiants/gallerie">
            <motion.h1
              className={styles.vie}
              onHoverStart={() => setImageSurvol("ETUDIANT.png")}
            >
              Vie étudiante
            </motion.h1>
          </Link>
        </section>
        <div className={styles.conteneurImage}>
          <span className={styles.conteneurEffetImage}>
            <Image
              src={`/images/${imageSurvol}`}
              loading="eager"
              layout="fill"
              quality={50}
              unsized
            />
          </span>
        </div>
      </main>
    </motion.div>
  );
}
