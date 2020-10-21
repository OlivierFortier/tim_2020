import {motion} from "framer-motion";
import styles from "./grille.module.scss";

export default function Grille() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.conteneur}
    >
      <h1>bienvenue sur la grille des profs</h1>
    </motion.div>
  );
}
