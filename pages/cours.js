import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import NomCours from "../components/cours/nomCours";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../libs/requetesDonnes";
import { resetIdCounter } from "react-tabs";
import { useState, useEffect } from "react";
import DetailsCours from "../components/cours/detailsCours";
import styles from "./cours.module.scss";
import { MdArrowDropDown } from "react-icons/md";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useOrdreListeCours } from "../hooks/useCours";
import Head from "next/head";
import { useListeThemes, useTheme } from "../hooks/contexteTheme";

export default function Cours({ listeCours }) {
  //on arrange la liste des cours
  const listeTousLesCours = useOrdreListeCours(listeCours);

  //définir l'état de base avec tous les cours affichés
  const [tousLesCours, setTousLesCours] = useState(listeTousLesCours);

  //filtrer les cours selon l'option select de l'utilisateur
  function filtrerCours(evenement) {
    //on boucle sur toutes les sessions pour retourner une nouvelle liste des cours triés
    const coursFiltres = listeTousLesCours.map((session) => {
      //on boucle avec la méthode filter pour prendre seulement les cours qui correspondent à notre filtre
      return [...session].filter((cours) => {
        const sujetPrincipal = cours.sujetPrincipal.some((typeCours) =>
          evenement.target.value !== ""
            ? typeCours === evenement.target.value
            : typeCours
        );

        const sujetsSecondaires =
          cours.sujetsSecondaires &&
          cours.sujetsSecondaires.some((typeCours) =>
            evenement.target.value !== ""
              ? typeCours === evenement.target.value
              : typeCours
          );

        //on retourne seulement les cours dont les sujets correspondent à la valeur du select
        if (sujetPrincipal) return sujetPrincipal;
        else if (sujetsSecondaires) return sujetsSecondaires;
      });
    });
    //mettre à jour l'état pour effectuer un nouveau rendu
    setTousLesCours(coursFiltres);
  }

  const [coursAffiche, setCoursAffiche] = useState("");

  const [tabActuel, setTabActuel] = useState(0);

  // gestion du theme
  const theme = useTheme()
  const listeThemes = useListeThemes()
  const [lesStyles, setLesStyles] = useState({
    couleurGenerale: "#279728",
    couleurBorder: "#f3f1f1",
    couleurAccent: "#0C639A"
  });

  useEffect(() => {
    switch (theme) {
      case listeThemes.art:
        setLesStyles({
          couleurGenerale: "#f18163",
          couleurBorder: "#f3f1f1",
        });
        break;

      case listeThemes.code:
        setLesStyles({
          couleurGenerale: "#279728",
          couleurBorder: "#f3f1f1",
        });
        break;

      case listeThemes.parent:
        setLesStyles({
          couleurGenerale: "#4F638D",
          couleurBorder: "black",
        });
        break;

      default:
        setLesStyles({
          couleurGenerale: "#279728",
          couleurBorder: "#f3f1f1",
        });
        break;
    }
  }, [theme]);

  return (
    <motion.div
      initial={{ y: "10vw", opacity: 0, }}
      animate={{ y: 0, x: 0, opacity: 1, transition:{ ease: "easeInOut", duration: 0.7}}}
      exit={{y : "-50vh", opacity: 0, transition:{ ease: "easeInOut", duration: 0.5}}}
      className={styles.conteneurCours}
      transition={{duration: 0.8}}
      key="cours"
    >
      <Head>
        <title>TIM | Cours</title>
        <meta
          name="Description"
          content="Page des cours des Techniques d'Intégration Multimédia du Collège Maisonneuve"
        ></meta>
        <link rel="canonical" href="https://tim-2020.vercel.app/cours"></link>
        <meta property="og:title" content="Cours | TIM Maisonneuve" />
        <meta property="og:url" content="https://tim-2020.vercel.app/cours" />
        <meta
          property="og:description"
          content="Page des cours des Techniques d'Intégration Multimédia du Collège Maisonneuve"
        />
      </Head>
      <div className={styles.conteneurTitre}>
        <h1 className={styles.titreCours}>LA LISTE DES COURS</h1>
        <h2 className={styles.titreChoix}>
          J'aime bien &nbsp;
          <motion.select
            onChange={(evenement) => filtrerCours(evenement)}
            className={styles.selecteur}
            onClick={() => setCoursAffiche(null)}
            style={{borderColor: lesStyles.couleurBorder, color: lesStyles.couleurGenerale}}
          >
            <option value="">de tout</option>
            <option value="Jeux">les jeux</option>
            <option value="Web">le web</option>
            <option value="Design">le design</option>
            <option value="3D">la 3D</option>
            <option value="Programmation">la programmation</option>
            <option value="Vidéo et Audio">la vidéo</option>
            <option value="Intégration">l'intégration</option>
            <option value="Profession">la profession</option>
          </motion.select>
        </h2>
        <h3>Sessions</h3>
      </div>
      <Tabs
        onSelect={(index) => setTabActuel(index)}
        className={styles.lesTabs}
        selectedTabClassName={styles.tabSelection}
        selectedTabPanelClassName={styles.tabPanelSelection}
      >
        <TabList className={styles.leTabList} style={{borderColor: lesStyles.couleurBorder}}>
          <AnimateSharedLayout>
            <Tab onClick={() => setCoursAffiche(null)}>
              <motion.span whileTap={{scale: 1.05}} className={styles.conteneurNomNbSession}>
                <h4 className={styles.motSession}>Session</h4>
                <h4 className={styles.nbSession}>1</h4>
              </motion.span>
              <motion.div layout>
                {tabActuel === 0 && (
                  <motion.div className={styles.conteneurFleche} layoutId="fleche">
                    <MdArrowDropDown
                      className={styles.flecheBas}
                    ></MdArrowDropDown>
                  </motion.div>
                )}
              </motion.div>
            </Tab>
            <Tab onClick={() => setCoursAffiche(null)}>
              <motion.span whileTap={{scale: 1.05}} className={styles.conteneurNomNbSession}>
                <h4 className={styles.motSession}>Session</h4>
                <h4 className={styles.nbSession}>2</h4>
              </motion.span>
              <motion.div layout>
                {tabActuel === 1 && (
                  <motion.div className={styles.conteneurFleche} layoutId="fleche">
                    <MdArrowDropDown
                      className={styles.flecheBas}
                    ></MdArrowDropDown>
                  </motion.div>
                )}
              </motion.div>
            </Tab>
            <Tab onClick={() => setCoursAffiche(null)}>
              <motion.span whileTap={{scale: 1.05}} className={styles.conteneurNomNbSession}>
                <h4 className={styles.motSession}>Session</h4>
                <h4 className={styles.nbSession}>3</h4>
              </motion.span>
              <motion.div layout>
                {tabActuel === 2 && (
                  <motion.div className={styles.conteneurFleche} layoutId="fleche">
                    <MdArrowDropDown
                      className={styles.flecheBas}
                    ></MdArrowDropDown>
                  </motion.div>
                )}
              </motion.div>
            </Tab>
            <Tab onClick={() => setCoursAffiche(null)}>
              <motion.span whileTap={{scale: 1.05}} className={styles.conteneurNomNbSession}>
                <h4 className={styles.motSession}>Session</h4>
                <h4 className={styles.nbSession}>4</h4>
              </motion.span>
              <motion.div layout>
                {tabActuel === 3 && (
                  <motion.div className={styles.conteneurFleche} layoutId="fleche">
                    <MdArrowDropDown
                      className={styles.flecheBas}
                    ></MdArrowDropDown>
                  </motion.div>
                )}
              </motion.div>
            </Tab>
            <Tab onClick={() => setCoursAffiche(null)}>
              <motion.span whileTap={{scale: 1.05}} className={styles.conteneurNomNbSession}>
                <h4 className={styles.motSession}>Session</h4>
                <h4 className={styles.nbSession}>5</h4>
              </motion.span>
              <motion.div layout>
                {tabActuel === 4 && (
                  <motion.div className={styles.conteneurFleche} layoutId="fleche">
                    <MdArrowDropDown
                      className={styles.flecheBas}
                    ></MdArrowDropDown>
                  </motion.div>
                )}
              </motion.div>
            </Tab>
            <Tab onClick={() => setCoursAffiche(null)}>
              <motion.span whileTap={{scale: 1.05}} className={styles.conteneurNomNbSession}>
                <h4 className={styles.motSession}>Session</h4>
                <h4 className={styles.nbSession}>6</h4>
              </motion.span>
              <motion.div layout>
                {tabActuel === 5 && (
                  <motion.div className={styles.conteneurFleche} layoutId="fleche">
                    <MdArrowDropDown
                      className={styles.flecheBas}
                    ></MdArrowDropDown>
                  </motion.div>
                )}
              </motion.div>
            </Tab>
          </AnimateSharedLayout>
        </TabList>

        {/* double boucle sur les cours de toutes les sessions pour les afficher par session */}
        <AnimatePresence>
          <div className={styles.conteneurTabPanels} style={{borderColor: lesStyles.couleurBorder}}>
            {tousLesCours.map((session, indexSession) => {
              return (
                <TabPanel
                  key={Math.random() * indexSession}
                  className={styles.unTabPanel}
                >
                  {coursAffiche ? (
                    <DetailsCours
                    couleurIcones={lesStyles.couleurBorder}
                      infoCours={coursAffiche}
                      afficherCours={() => setCoursAffiche(null)}
                    />
                  ) : (
                    session.map((coursFiltre, indexCours) => {
                      return (
                        <NomCours
                        couleurBordure={lesStyles.couleurBorder}
                          afficherCours={() => setCoursAffiche(coursFiltre)}
                          key={Math.random() * indexCours}
                          infoCours={coursFiltre}
                        />
                      );
                    })
                  )}
                </TabPanel>
              );
            })}
          </div>
        </AnimatePresence>
      </Tabs>
    </motion.div>
  );
}

//on va chercher nos données du CMS dans cette fonction pour les passer en props
export async function getStaticProps() {
  //fonction à appeler pour le tab, puisqu'on utilise un framework react isomorphe (rendu serveur & client)
  resetIdCounter();

  //je prépare ma requete graphQl pour avoir la liste des noms et des slugs de tous les cours
  const requeteGqlTousLesCours = gql`
    {
      coursCollection {
        items {
          titre
          description
          session
          auChoix
          choixEntre {
            titre
          }
          sujetPrincipal
          sujetsSecondaires
          logicielsEtTechnologies
        }
      }
    }
  `;

  //je fais ma requete
  const res = await faireRequeteGql(requeteGqlTousLesCours);
  const listeCours = res.coursCollection.items;

  //je retourne la liste des cours, et je revalide à chaque seconde
  return {
    props: {
      listeCours,
    },
    revalidate: 1,
  };
}
