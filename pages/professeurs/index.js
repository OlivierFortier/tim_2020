import { motion } from "framer-motion";
import styles from "./professeurs.module.scss";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Professeurs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.conteneur}
    >
      <Head>
        <title>TIM | Professeurs</title>
        <meta charset="UTF-8"></meta>
        <meta
          name="Description"
          content="Page des proffesseurs de la Technique d'Intégration Multimédia du collège Maisonneuve"
        ></meta>
        <link
          rel="canonical"
          href="https://tim-2020.vercel.app/professeurs"
        ></link>
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
                // width={120}
                // height={120}
                loading="eager"
                layout="fill"
                unsized="true"
                src="/images/cam.jpg"
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
                // width={120}
                // height={120}
                loading="eager"
                layout="fill"
                unsized="true"
                src="/images/cam.jpg"
                alt={`photo de ${"prof.nom"}`}
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
                // width={120}
                // height={120}
                loading="eager"
                layout="fill"
                unsized="true"
                src="/images/cam.jpg"
                alt={`photo de ${"prof.nom"}`}
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
                // width={120}
                // height={120}
                loading="eager"
                layout="fill"
                unsized="true"
                src="/images/cam.jpg"
                alt={`photo de ${"prof.nom"}`}
              />
            </motion.div>
          </Link>
        </span>
        <span>
          <motion.div
            className={styles.conteneurImg}
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
                // width={120}
                // height={120}
                loading="eager"
                layout="fill"
                unsized="true"
                src="/images/cam.jpg"
                alt={`photo de ${"prof.nom"}`}
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
                // width={120}
                // height={120}
                loading="eager"
                layout="fill"
                unsized="true"
                src="/images/cam.jpg"
                alt={`photo de ${"prof.nom"}`}
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
                // width={120}
                // height={120}
                loading="eager"
                layout="fill"
                unsized="true"
                src="/images/cam.jpg"
                alt={`photo de ${"prof.nom"}`}
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
                // width={120}
                // height={120}
                loading="eager"
                layout="fill"
                unsized="true"
                src="/images/cam.jpg"
                alt={`photo de ${"prof.nom"}`}
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
                // width={120}
                // height={120}
                loading="eager"
                layout="fill"
                unsized="true"
                src="/images/cam.jpg"
                alt={`photo de ${"prof.nom"}`}
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
        <Link href="/professeurs/grille">
          <a>voir la grille</a>
        </Link>
      </div>
    </motion.div>
  );
}
