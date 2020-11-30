import { useCookies } from "react-cookie";
import {
  useListeThemes,
  useTheme,
  useThemeMiseAJour,
} from "../../hooks/contexteTheme";
import styles from "./boutonSelectionTheme.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import {motion} from "framer-motion"

export default function BoutonSelectionTheme() {
  const changerTheme = useThemeMiseAJour();
  const listeThemes = useListeThemes();
  const theme = useTheme();

  const [cookies, setCookie, removeCookie] = useCookies(["profil"]);

  const tableauTheme = [listeThemes.art, listeThemes.code, listeThemes.parent];

  const [indexTableau, setIndexTableau] = useState(tableauTheme.indexOf(theme));

  useEffect(()=>{
    
    mettreAjourTheme();

  },[indexTableau])

  function mettreAjourTheme() {
    if (indexTableau > 2) {
      // setIndexTableau((ancienIndex) => ancienIndex + 1);
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
      <motion.div whileHover={{scale: 1.1}} onClick={() => setIndexTableau(aI => aI + 1)} >
        <Image
          src="/images/Logo_TIM.png"
          width={57}
          height={26}
          quality={5}
          alt="Logo des Techniques d'Intégration Multimédia du Collège Maisonneuve"
          className={`${styles.logo}  ${theme != "parent" && styles.inverser}`}
        />
      </motion.div>
    </>
  );
}
