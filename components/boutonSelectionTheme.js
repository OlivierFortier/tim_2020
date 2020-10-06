import { useCookies } from "react-cookie";
import { useListeThemes, useThemeMiseAJour } from "../hooks/contexteTheme";


export default function BoutonSelectionTheme() {

  const changerTheme = useThemeMiseAJour()
  const listeThemes = useListeThemes()

  const [ cookies, setCookie, removeCookie ] = useCookies(['profil']);

  function mettreAjourTheme(e) {
    changerTheme(e.target.value)
    removeCookie('profil', { path: "/", maxAge: 2592000})
    setCookie('profil', e.target.value, { path: "/", maxAge: 2592000})
  }

  return (
    <>
      <select onChange={(e)=> mettreAjourTheme(e)} aria-label="Changer theme">
        <option value={listeThemes.art}>artiste</option>
        <option value={listeThemes.code}>hacker</option>
        <option value={listeThemes.parent}>parent</option>
      </select>
    
      <style jsx>{`
        select {
          appearance: none;
          margin-left: 30px;
          margin-right: 15px;
          height: 1rem;
          width: 1rem;
          background-color: #fff;
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
