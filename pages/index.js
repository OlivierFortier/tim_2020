import Head from "next/head";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Accueil from "../components/accueil/accueil";
import Intro from "../components/accueil/intro";
import SelectionProfil from "../components/accueil/selectionProfil";
import styles from "./index.module.scss";

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(["profil"]);

  //définir l'état de l'étape actuelle , commencant par l'intro
  const [etapePage, setEtapePage] = useState("intro");

  useEffect(() => {
    if (cookies.profil != undefined) {
      setEtapePage("accueil");
    }
  }, [cookies.profil]);

  return (
    <div className={styles.conteneurPage} suppressHydrationWarning={true}>
      <Head>
        <title>TIM | Accueil</title>
        <meta
          name="Description"
          content="Page d'acceuil des Techniques d'Intégration Multimédia du collège Maisonneuve"
        ></meta>
        <link rel="canonical" href="https://tim-2020.vercel.app/"></link>
      </Head>
      <div style={{ all: "inherit" }}>
        {etapePage === "intro" && <Intro changerEtape={setEtapePage} />}
        {etapePage === "profil" && (
          <SelectionProfil changerEtape={setEtapePage} />
        )}
        {etapePage === "accueil" && <Accueil changerEtape={setEtapePage} />}
      </div>
    </div>
  );
}
