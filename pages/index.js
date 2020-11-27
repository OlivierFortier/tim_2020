import Head from "next/head";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Accueil from "../components/accueil/accueil";
import Intro from "../components/accueil/intro";
import SelectionProfil from "../components/accueil/selectionProfil";
import styles from "./index.module.scss";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";


export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(["profil"]);

  //définir l'état de l'étape actuelle , commencant par l'intro
  const [etapePage, setEtapePage] = useState("");

  useEffect(() => {
    if (cookies.profil != undefined) {
      setEtapePage("accueil");
    } else {
      setEtapePage("intro");
    }
  }, [cookies.profil]);

  return (
    <motion.div exit={{x: "-50%", opacity: 0}} className={styles.conteneurPage} suppressHydrationWarning={true} key={Math.random()*100}>
      <Head>
        <title>TIM | Accueil</title>
        <meta charset="UTF-8"></meta>
        <meta
          name="Description"
          content="Page d'acceuil des Technique d'Intégration Multimédia du collège Maisonneuve"
        ></meta>
        <link rel="canonical" href="https://tim-2020.vercel.app/"></link>
      </Head>
      <div style={{ all: "inherit" }}>
        <AnimateSharedLayout>
          <AnimatePresence exitBeforeEnter>
            {etapePage === "intro" && (
              <Intro key="intro" changerEtape={setEtapePage} />
            )}

            {etapePage === "profil" && (
              <SelectionProfil key="profil" changerEtape={setEtapePage} />
            )}
            {etapePage === "accueil" && (
              <Accueil key="accueil" changerEtape={setEtapePage} />
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </motion.div>
  );
}
