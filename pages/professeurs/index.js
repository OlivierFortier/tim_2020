import { motion } from "framer-motion";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../libs/requetesDonnes";
import styles from "./professeurs.module.scss";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useListeThemes, useTheme } from "../../hooks/contexteTheme";

export default function Professeurs({ items }) {
  // gestion du theme de couleur
  const theme = useTheme();
  const listeTheme = useListeThemes();
  const [lesStyles, setLesStyles] = useState({
    couleurCercle: "#f3f1f1",
  });

  useEffect(() => {
    switch (theme) {
      case "art":
        setLesStyles({
          couleurCercle: "#f3f1f1",
        });
        break;

      case "code":
        setLesStyles({
          couleurCercle: "#f3f1f1",
        });
        break;

      case "parent":
        setLesStyles({
          couleurCercle: "black",
        });
        break;

      default:
        setLesStyles({
          couleurCercle: "#f3f1f1",
        });
        break;
    }
  }, [theme]);

  // choisir des profs aléatoires à afficher
  const melangerProfs = (liste) =>
    liste
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);

  const [profsAlea, setProfAlea] = useState(items);

  useEffect(() => {
    const melanger = melangerProfs(items);
    setProfAlea((ancienOrdre) => melanger);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, stiffness: 90 } }}
      exit={{ y: -1000, opacity: 0, transition: { duration: 0.7 } }}
      transition={{duration: 5.75}}
      className={styles.conteneur}
      key="professeurs"
    >
      <Head>
        <title>TIM | Professeurs</title>
        <meta
          name="Description"
          content="Page des professeurs de la Technique d'Intégration Multimédia du collège Maisonneuve"
        ></meta>
        <link
          rel="canonical"
          href="https://tim-2020.vercel.app/professeurs"
        ></link>
        <meta property="og:title" content="Professeurs | TIM Maisonneuve" />
        <meta property="og:url" content="https://tim-2020.vercel.app/professeurs" />
        <meta
          property="og:description"
          content="Page des professeurs des Technique d'Intégration Multimédia du collège Maisonneuve"
        />
      </Head>
      <div className={styles.sectionLesProfs}>
        <Link href="professeurs/grille">
          <h1>LES PROFESSEURS</h1>
        </Link>
        <Link href="professeurs/grille">
          <h3>QUI SONT-ILS?</h3>
        </Link>
      </div>
      <div className={styles.sectionImages}>
        <span>
          <Link href="/professeurs/grille">
            <motion.div
              className={styles.conteneurImg}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: "0%", y: "0%", scale: 0.8 }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={profsAlea[0].photo.url}
                alt={profsAlea[0].nom}
              />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              className={styles.conteneurImg}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: "100%", y: "-10%", scale: 1.4 }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={profsAlea[1].photo.url}
                alt={profsAlea[1].nom}
              />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              className={styles.conteneurImg}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: "-10%", y: "140%" }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={profsAlea[2].photo.url}
                alt={profsAlea[2].nom}
              />
            </motion.div>
          </Link>
        </span>
        <span>
          <Link href="/professeurs/grille">
            <motion.div
              className={styles.conteneurImg}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, scale: 3.6, y: "70%" }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={profsAlea[3].photo.url}
                alt={profsAlea[3].nom}
              />
            </motion.div>
          </Link>
        </span>
        <span>
          <motion.div
            style={{borderColor : lesStyles.couleurCercle}}
            animate={{ x: "-40%", y: "-20%" }}
            className={styles.cercle}
          ></motion.div>
          <Link href="/professeurs/grille">
            <motion.div
              className={styles.conteneurImg}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: "20%", y: "-90%", scale: 0.9 }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={profsAlea[4].photo.url}
                alt={profsAlea[4].nom}
              />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              className={styles.conteneurImg}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: "145%", y: "-140%" }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={profsAlea[5].photo.url}
                alt={profsAlea[5].nom}
              />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              className={styles.conteneurImg}
              style={{ zIndex: -1 }}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: "10%", y: "40%" }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={profsAlea[6].photo.url}
                alt={profsAlea[6].nom}
              />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              className={styles.conteneurImg}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: "-260%", y: "150%", scale: 1.4 }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={profsAlea[7].photo.url}
                alt={profsAlea[7].nom}
              />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              className={styles.conteneurImg}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: "-300%", y: "340%", scale: 2 }}
            >
              <Image
                className={styles.imgProf}
                quality={1}
                loading="lazy"
                layout="fill"
                unsized
                src={profsAlea[8].photo.url}
                alt={profsAlea[8].nom}
              />
            </motion.div>
          </Link>
        </span>
      </div>
      <div className={styles.sectionTexte}>
        <Link href="professeurs/grille">
          <h2>
            PLUS<b>++</b>DE <b>25 ANS</b> D'EXPÉRIENCE DANS LE DOMAINE POUR VOUS
            DONNER <b>LA MEILLEURE ÉDUCATION</b>
          </h2>
        </Link>
      </div>
    </motion.div>
  );
}

export async function getStaticProps({ params }) {
  const requeteGql = gql`
    query Professeurs {
      professeurCollection {
        items {
          nom
          photo {
            url
          }
        }
      }
    }
  `;

  const json = await faireRequeteGql(requeteGql);

  const lesProf = json.professeurCollection;

  return { props: lesProf, revalidate: 1 };
}
