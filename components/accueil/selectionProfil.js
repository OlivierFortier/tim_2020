import { useCookies } from "react-cookie";
import { useListeThemes, useThemeMiseAJour } from "../../hooks/contexteTheme";
import styles from "./selectionProfil.module.scss";
import { motion } from "framer-motion";

export default function SelectionProfil({ changerEtape }) {
  //aller chercher les valeurs du thème et pour mettre à jour le thème dans les contextes
  const changerTheme = useThemeMiseAJour();
  const listeThemes = useListeThemes();

  //utiliser le hook des cookies pour mettre le profil dans un cookie
  const [cookies, setCookie, removeCookie] = useCookies(["profil"]);

  //changer le thème et passer à la prochaine étape
  function choisirTheme(choix) {
    changerTheme(choix);
    //créer le cookie avec le choix du profil
    removeCookie("profil", { path: "/", maxAge: 2592000 });
    setCookie("profil", choix, { path: "/", maxAge: 2592000 });
    changerEtape("accueil");
  }

  //TODO : animer les ronds

  return (
    <>
      <motion.div
      layout
        initial={{
          x: 1000,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        exit={{
          x: -1000,
          opacity: 0,
        }}
        className={styles.conteneurProfils}
      >
        <h1>Sélectionnez votre profil</h1>
        <div className={styles.grilleProfils}>
          <span
            onClick={() => choisirTheme(listeThemes.art)}
            className={styles.art}
          >
            <h2>Artiste Digital</h2>
          </span>
          <span
            onClick={() => choisirTheme(listeThemes.code)}
            className={styles.code}
          >
            <h2>
              Pirate <br /> Informatique
            </h2>
          </span>
          <span
            onClick={() => choisirTheme(listeThemes.parent)}
            className={styles.parent}
          >
            <h2>Parent</h2>
          </span>
        </div>
        <h2
          className={styles.rapide}
          onClick={() => choisirTheme(listeThemes.parent)}
        >
          Accéder au site directement
        </h2>
      </motion.div>
    </>
  );
}
