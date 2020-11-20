import styles from "./detailsCours.module.scss";
import { motion } from "framer-motion";
import { useIconeTechnos } from "../../hooks/useIcone";
import Markdown from "markdown-to-jsx";

import { MdArrowDropDown } from "react-icons/md";

import { useSetEtatScroll } from "../../hooks/contexteScroll";

export default function DetailsCours({ infoCours, afficherCours }) {
  const setArreterScroll = useSetEtatScroll();

  const Icones =
    infoCours.logicielsEtTechnologies &&
    useIconeTechnos(infoCours.logicielsEtTechnologies);

  return (
    <motion.div
      layout
      initial={{opacity: 0, transition:{ ease: "easeInOut"}}}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -500, opacity: 0 }}
      className={styles.detailCours}
    >
      <h2 onClick={afficherCours}>Retour</h2>

      <div className={styles.contenuDetailCours}>
        <div className={styles.conteneurTitre}>
          <h3>{infoCours.titre}</h3>
          <div className={styles.conteneurIcones}>
            {Icones &&
              Icones.map((Icone, index) => (
                <Icone
                  key={index}
                  style={{
                    color: "white",
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
          onTouchStart={() => setArreterScroll(true)}
          onMouseEnter={() => setArreterScroll(true)}
          onMouseLeave={() => setArreterScroll(false)}
          onTouchEnd={() => setArreterScroll(false)}
          className={styles.descriptionCours}
        >
          <Markdown className={styles.paragrapheCours}>{infoCours.description}</Markdown>
        </span>
        <div className={styles.fleche}>
          <MdArrowDropDown
            className={styles.flecheDescriptionCours}
          ></MdArrowDropDown>
        </div>
      </div>

      {/* À revoir ------------------------------ */}
    </motion.div>
  );
}
