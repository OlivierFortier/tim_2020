import styles from "./futur.module.scss";
import {motion} from "framer-motion"
import Link from "next/link"

export default function Futur() {
  return (
    <motion.main initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}} className={styles.conteneurPage}>
      <div className={styles.fondTexte}>
        <h6>ÉTUDIER DANS L’INDUSTRIE C’EST BIEN PLUS</h6>
      </div>

      <Link href="/futur/perspectives-universitaires">
        <section className={styles.sectionUni}>
          <h1>Perspective universitaire</h1>
          <h3>Poursuivre ses études et approfondir ses connaissances.</h3>
        </section>
      </Link>

      <Link href="/futur/stages">
        <section className={styles.sectionStage}>
          <h1>Stages</h1>
          <h3>Mettre en pratique ses apprentissages.</h3>
        </section>
      </Link>

      <Link href="/futur/perspectives-demplois">
        <section className={styles.sectionEmploi}>
          <h1>Perspectives d'emploi</h1>
          <h3>Devenir un professionnel dans le domaine.</h3>
        </section>
      </Link>
    </motion.main>
  );
}
