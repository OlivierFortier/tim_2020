import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Accueil from '../components/accueil/accueil';
import Intro from '../components/accueil/intro';
import SelectionProfil from '../components/accueil/selectionProfil';
import styles from './index.module.scss';

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['profil']);

  // définir l'état de l'étape actuelle , commencant par l'intro
  const [etapePage, setEtapePage] = useState('');

  useEffect(() => {
    if (cookies.profil != undefined) {
      setEtapePage('accueil');
    } else {
      setEtapePage('intro');
    }
  }, [cookies.profil]);

  return (
    <motion.div
      exit={{ x: '-50vw', transition: { duration: 0.75 }, opacity: 0 }}
      className={styles.conteneurPage}
      key="accueil"
      transition={{ duration: 0.75 }}
      suppressHydrationWarning
    >
      <Head>
        <title>
          Accueil | TIM | Techniques d'Intégration Multimédia du Collège
          Maisonneuve
        </title>
        <meta
          name="google-site-verification"
          content="8wSuECvx0LPPYY0CdAZ4O9RjbK3j3qlzEB72E37TlW8"
        />
        <meta
          name="Description"
          content="Techniques d'Intégration Multimédia du Collège Maisonneuve. Une éducation à la fine pointe de l'industrie. Apprenez le design web, la programmation, le développement de jeux, la modélisation 3D, et bien plus encore!"
        />
        <link rel="canonical" href="https://tim-2020.vercel.app/" />
        <meta
          property="og:title"
          content="Accueil | TIM | Techniques d'Intégration Multimédia du Collège Maisonneuve"
        />
        <meta property="og:url" content="https://tim-2020.vercel.app/" />
        <meta
          property="og:description"
          content="Techniques d'Intégration Multimédia du Collège Maisonneuve. Une éducation à la fine pointe de l'industrie. Apprenez le design web, la programmation, le développement de jeux, la modélisation 3D, et bien plus encore!"
        />
      </Head>
      <div style={{ all: 'inherit' }}>
        <span style={{ display: 'none' }}>
          <h1>Techniques d'Intégration Multimédia du Collège Maisonneuve</h1>
          <h2>
            Apprenez le Design graphique , le Développement de jeux, la
            programmation web, la modélisation 3D, et bien plus encore !
          </h2>
          <p>
            Au collège Maisonneuve, vous serez bien entouré par des professeurs
            chaleureux et compétents, ainsi qu'une communauté merveilleuse.
          </p>
          <h3>
            La Juxtaposition du Logique et du Créatif, c'est ce qui défini le
            profil d'un étudiant au TIM.
          </h3>
          <p>
            La formation qu'on offre est complète et permet d'accéder directment
            au marché du travail, car vous apprendrez les techniques qui sont
            utilisées profesionnellement dans l'industrie.
          </p>
          <p>
            Que vous soyez en recherche d'un programme d'études, ou que vous
            voulez simplement connaitre le profil de sortie des étudiants, tout
            se trouve sur ce site
          </p>
        </span>
        <AnimateSharedLayout>
          <AnimatePresence exitBeforeEnter>
            {etapePage === 'intro' && (
              <Intro key="intro" changerEtape={setEtapePage} />
            )}

            {etapePage === 'profil' && (
              <SelectionProfil key="profil" changerEtape={setEtapePage} />
            )}
            {etapePage === 'accueil' && (
              <Accueil key="accueil" changerEtape={setEtapePage} />
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </motion.div>
  );
}
