import { motion } from "framer-motion";
import Link from "next/link";

export default function Custom404() {
  // styles de la page, puisqu'elle est pas importante on n'a pas jugé que c'était nécéssaire de créer un fichier css à part
  const mainStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    maxWidth: "90%",
    textAlign: "center",
    minHeight: "70vh",
    fontFamily: "NeueMontreal"
  };

  const hStyle = {
    textTransform: "uppercase"
  };

  const aStyle = {
    color: "unset",
    margin: "1%",
    fontSize: "1.5rem",
    textTransform: "uppercase"
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
      style={mainStyle}
    >
      <h1 style={hStyle}>Cette page n&apos;existe pas</h1>
      <h2 style={hStyle}>
        Voici une liste des pages qui pourraient vous intéresser
      </h2>
      <Link style={aStyle} href="/">
        accueil
      </Link>
      <Link style={aStyle} href="/introduction">
        introduction
      </Link>
      <Link style={aStyle} href="/cours">
        cours
      </Link>
      <Link style={aStyle} href="/professeurs">
        professeurs
      </Link>
      <Link style={aStyle} href="/etudiants">
        étudiants
      </Link>
      <Link style={aStyle} href="/futur">
        futur
      </Link>
      <Link style={aStyle} href="/inscription">
        inscription
      </Link>
    </motion.main>
  );
}
