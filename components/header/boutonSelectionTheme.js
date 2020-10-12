import { useCookies } from "react-cookie";
import { useListeThemes, useTheme, useThemeMiseAJour } from "../../hooks/contexteTheme";


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
      <select value={theme} onChange={(e)=> mettreAjourTheme(e)} aria-label="Changer theme">
        <option value={listeThemes.art}>artiste</option>
        <option value={listeThemes.code}>hacker</option>
        <option value={listeThemes.parent}>parent</option>
      </select>
    
      <style jsx>{`
        select {
          appearance: none;
          margin-right: 15px;
          height: 24px;
          width: 24px;
          background-color: #EBEBEB;
          border-radius: 50%;

          font-size: 0;

          option {
            font-size: 1rem;
          }

        }
      `}</style>
    </>
  );
}
