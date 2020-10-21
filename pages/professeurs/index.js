import { motion } from "framer-motion";
import styles from "./professeurs.module.scss";
import Link from "next/link";

export default function Professeurs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.conteneur}
    >
      <h1>bienvenue sur la page des profs en construction</h1>
      <Link href="/professeurs/grille">
        <a>voir la grille</a>
      </Link>
    </motion.div>
  );
}
