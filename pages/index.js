import Head from "next/head";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Accueil from "../components/accueil/accueil";
import Intro from "../components/accueil/intro";
import SelectionProfil from "../components/accueil/selectionProfil";
import { motion, AnimateSharedLayout } from "framer-motion";

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(["profil"]);

  //définir l'état de l'étape actuelle , commencant par l'intro
  const [etapePage, setEtapePage] = useState(
    cookies.profil ? "accueil" : "intro"
  );

  return (
    <div className="conteneur-page" suppressHydrationWarning={true}>
      <Head>
        <title>TIM | Accueil</title>
        <meta
          name="Description"
          content="Page d'acceuil des Techniques d'Intégration Multimédia du collège Maisonneuve"
        ></meta>
        <link rel="canonical" href="https://tim-2020.vercel.app/"></link>
      </Head>

      {/* afficher l'intro, le profil et l'acceuil selon l'étape ou l'utilisateur est */}
      <AnimateSharedLayout>
        {etapePage === "intro" && (
          <motion.div
            layout
            initial={{
              scale: 0.2,
              opacity: 0,
            }}
            animate={{ scale: 1, opacity: 1, transition: { delay: 0.4 } }}
          >
            <Intro changerEtape={setEtapePage} />
          </motion.div>
        )}
        {etapePage === "profil" && (
          <SelectionProfil changerEtape={setEtapePage} />
        )}
        {etapePage === "accueil" && <Accueil changerEtape={setEtapePage} />}
      </AnimateSharedLayout>

      {/*il est préférable que vous utlisiez du css "local" et non "global"
      Cela fait que le css n'affecte rien d'autre que cette page, ce composant ou ce fichier, ce qui évite les erreurs.
      Cela se fait facilement à même le fichier js en utilisant la balise style jsx
      comme ci-dessous. .*/}
      <style jsx>{`
        .conteneur-page {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          margin-top: 2%;
        }
      `}</style>
    </div>
  );
}
