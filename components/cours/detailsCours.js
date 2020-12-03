import styles from "./detailsCours.module.scss";
import { motion } from "framer-motion";
import { useIconeTechnos } from "../../hooks/useIcone";
import Markdown from "markdown-to-jsx";
import { MdArrowDropDown } from "react-icons/md";

export default function DetailsCours({ infoCours, afficherCours, couleurIcones }) {

  const Icones =
    infoCours.logicielsEtTechnologies &&
    useIconeTechnos(infoCours.logicielsEtTechnologies);

  return (
    <motion.div
      layout
      initial={{ x: 2, opacity: 0}}
      animate={{ x: 0, opacity: 1, transition: { ease: "easeInOut", duration : 10}}}
      exit={{opacity: 0 }}
      className={styles.detailCours}
    >
      <motion.h2 whileHover={{x: 5}} whileTap={{x: 40}} onClick={afficherCours}>Retour</motion.h2>

      <div className={styles.contenuDetailCours}>
        <div className={styles.conteneurTitre}>
          <h3>{infoCours.titre}</h3>
          <div className={styles.conteneurIcones}>
            {Icones &&
              Icones.map((Icone, index) => (
                <Icone
                
                  key={index}
                  style={{
                    color: couleurIcones,
                    paddingLeft: "0.5%",
                    paddinRight: "0.5%",
                  }}
                  fontSize="30"
                />
              ))}
          </div>
        </div>

        {/* ================================================================ */}

        <span
          className={styles.descriptionCours}
        >
          <Markdown className={styles.paragrapheCours}>{infoCours.description}</Markdown>
        </span>
        <div className={styles.fleche}>
          {/* <MdArrowDropDown
            className={styles.flecheDescriptionCours}
          ></MdArrowDropDown> */}
        </div>
      </div>

      {/* À revoir ------------------------------ */}
    </motion.div>
  );
}
