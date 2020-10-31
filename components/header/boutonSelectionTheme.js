import { useCookies } from "react-cookie";
import { useListeThemes, useTheme, useThemeMiseAJour } from "../../hooks/contexteTheme";
import styles from "./boutonSelectionTheme.module.scss"
import Image from "next/image"


export default function BoutonSelectionTheme() {

  const changerTheme = useThemeMiseAJour()
  const listeThemes = useListeThemes()
  const theme = useTheme()

  const [ cookies, setCookie, removeCookie ] = useCookies(['profil']);

  function mettreAjourTheme(e) {
    changerTheme(e.target.value)
    removeCookie('profil', { path: "/", maxAge: 2592000})
    setCookie('profil', e.target.value, { path: "/", maxAge: 2592000})
  }

  return (
    <>
      {/* <select className={styles.boutonSelect} value={theme} onChange={(e)=> mettreAjourTheme(e)} aria-label="Changer theme">
        <option value={listeThemes.art}>artiste</option>
        <option value={listeThemes.code}>hacker</option>
        <option value={listeThemes.parent}>parent</option>
      </select> */}
    
      <Image src="/images/Logo_TIM.png" width={57} height={26} className={styles.logo}/>

    </>
  );
}
