import { motion } from "framer-motion";
import Head from "next/head";

export default function Etudiants() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      style={{ color: "white" }}
    >
    <Head>
      <title>TIM | Inscription</title>
      <meta charset="UTF-8"></meta>
      <meta name="Description"
        content="Page de la vie étudiante de la technique d'Intégration Multimédia du collège Maisonneuve"
      ></meta>
      <link rel="canonical" href="https://tim-2020.vercel.app/etudiants"></link>
    </Head>
      <h1>voici la page pour les nouveaux étudiants</h1>
      <ul>
        <li>Étudiant 1</li>
        <li>Étudiant 2</li>
        <li>Étudiant 3</li>
        <li>Étudiant 4</li>
        <li>Étudiant 5</li>
      </ul>
    </motion.div>
  );
}
