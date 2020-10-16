import styles from "./detailsCours.module.scss";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useIconeTechnos } from "../../hooks/useIcone";

export default function DetailsCours({ infoCours, afficherCours }) {
  const Icones =
    infoCours.logicielsEtTechnologies &&
    useIconeTechnos(infoCours.logicielsEtTechnologies);

  return (
    <motion.div
      layout
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -500, opacity: 0 }}
      className={styles.detailCours}
    >
      <h2 onClick={afficherCours}>
        <FaLongArrowAltLeft
          onClick={afficherCours}
          className={styles.boutonFleche}
        />
        Retour aux autres cours
      </h2>

      <div className={styles.contenuDetailCours}>
        <div className={styles.conteneurTitre}>
          <h3>{infoCours.titre}</h3>
          <div className={styles.conteneurIcones}>
            {Icones &&
              Icones.map((Icone, index) => (
                <Icone key={index} style={{ color: "white" }} fontSize="30" />
              ))}
          </div>
        </div>
        <span className={styles.descriptionCours}>
          <p>{infoCours.description}</p>
        </span>
      </div>
    </motion.div>
  );
}
