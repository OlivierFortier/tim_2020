import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import styles from "./etudiants.module.scss";

export default function index() {
  return (
    <motion.div
      className={styles.conteneurPage}
      exit={{ opacity: 0 }}
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      style={{ color: "white" }}
    >
      <Head>
        <title>TIM | Vie Étudiante</title>
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
          <h1 className={styles.projets}>Projets étudiants</h1>
          <span className={styles.ligne}></span>
          <h1 className={styles.vie}>Vie étudiante</h1>
        </section>
        <div className={styles.conteneurImage}>
          <span className={styles.conteneurEffetImage}>
            <Image
              src={"/images/photo3.jpg"}
              loading="eager"
              layout="fill"
              unsized
            />
          </span>
        </div>
      </main>
    </motion.div>
  );
}
