import { motion } from "framer-motion";
import styles from "./professeurs.module.scss";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { ScalarLeafsRule } from "graphql";

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
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: "-20%", y: "0%", scale: 0.5 }}
            >
              <Image width={120} height={120} src="/images/cam.jpg" />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: "150%", y: "-60%", scale: 1.4 }}
            >
              <Image width={120} height={120} src="/images/cam.jpg" alt="" />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: "100%", y: "140%" }}
            >
              <Image width={120} height={120} src="/images/cam.jpg" alt="" />
            </motion.div>
          </Link>
        </span>
        <span>
          <Link href="/professeurs/grille">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, scale: 3, y: "50%" }}
            >
              <Image width={120} height={120} src="/images/cam.jpg" alt="" />
            </motion.div>
          </Link>
        </span>
        <span>
          <motion.div
            animate={{ x: "-40%", y: "-20%" }}
            className={styles.cercle}
          ></motion.div>
          <Link href="/professeurs/grille">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: "-120%", y: "-200%", scale: 0.9 }}
            >
              <Image width={120} height={120} src="/images/cam.jpg" alt="" />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: "75%", y: "-140%" }}
            >
              <Image width={120} height={120} src="/images/cam.jpg" alt="" />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              style={{ zIndex: -1 }}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: "40%", y: "40%" }}
            >
              <Image width={120} height={120} src="/images/cam.jpg" alt="" />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: "-160%", y: "100%", scale: 1.4 }}
            >
              <Image width={120} height={120} src="/images/cam.jpg" alt="" />
            </motion.div>
          </Link>
          <Link href="/professeurs/grille">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1, x: "-60%", y: "320%", scale: 2.5 }}
            >
              <Image width={120} height={120} src="/images/cam.jpg" alt="" />
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
