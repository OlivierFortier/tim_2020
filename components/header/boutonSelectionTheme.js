import { useCookies } from "react-cookie";
import {
  useListeThemes,
  useTheme,
  useThemeMiseAJour,
} from "../../hooks/contexteTheme";
import styles from "./boutonSelectionTheme.module.scss";
import Image from "next/image";
import { useState } from "react";
import {motion} from "framer-motion"

export default function BoutonSelectionTheme() {
  const changerTheme = useThemeMiseAJour();
  const listeThemes = useListeThemes();
  const theme = useTheme();

  const [cookies, setCookie, removeCookie] = useCookies(["profil"]);

  const tableauTheme = [listeThemes.art, listeThemes.code, listeThemes.parent];

  const [indexTableau, setIndexTableau] = useState(tableauTheme.indexOf(theme));

  function mettreAjourTheme() {
    if (indexTableau < 2) {
      setIndexTableau((ancienIndex) => ancienIndex + 1);
    } else {
      setIndexTableau(0);
    }
    changerTheme(tableauTheme[indexTableau]);
    removeCookie("profil", { path: "/", maxAge: 2592000 });
    setCookie("profil", tableauTheme[indexTableau], {
      path: "/",
      maxAge: 2592000,
    });
  }

  return (
    <>
      {/* <select className={styles.boutonSelect} value={theme} onChange={(e)=> mettreAjourTheme(e)} aria-label="Changer theme">
        <option value={listeThemes.art}>artiste</option>
        <option value={listeThemes.code}>hacker</option>
        <option value={listeThemes.parent}>parent</option>
      </select> */}
      <motion.div whileHover={{scale: 1.1}} onClick={() => mettreAjourTheme()} >
        <Image
          src="/images/Logo_TIM.png"
          width={57}
          height={26}
          quality={5}
          className={`${styles.logo}  ${theme != "parent" && styles.inverser}`}
        />
      </motion.div>
    </>
  );
}
