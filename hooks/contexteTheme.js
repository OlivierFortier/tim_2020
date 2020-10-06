import { createContext, useContext, useState } from "react";
import { useCookies } from "react-cookie";

//liste des 3 profils
 const profils = {art: 'art', code: 'code', parent: 'parent'}

 //création des contextes react qui permettent de changer le theme de partout dans le site
 const ContexteTheme = createContext()
 const ContexteMiseAJourTheme = createContext()
 const ContexteListeThemes = createContext()

 //permet d'avoir acces au thème/profil en cours
 export function useTheme() {
     return useContext(ContexteTheme)
 }

 //permet d'avoir accès à la fonction pour mettre à jour le thème/profil
 export function useThemeMiseAJour() {
     return useContext(ContexteMiseAJourTheme)
 }

 //permet d'avoir accès à la liste des thèmes
 export function useListeThemes() {
     return useContext(ContexteListeThemes)
 }

export function FournisseurTheme({ children }) {

    const [ cookies, setCookie, removeCookie ] = useCookies(['profil']);

    console.log(cookies.profil)

    const themeInitial = cookies.profil ? cookies.profil : profils.art

    //l'état global de l'application contient le thème. par défaut, le thème d'art
    const [themeProfil, setThemeProfil] = useState(themeInitial)

    //la fonction qui change le thème
    function changerTheme(profil) {
        setThemeProfil(profil)
    }

    return (
        <ContexteTheme.Provider value={themeProfil}>
            <ContexteMiseAJourTheme.Provider value={changerTheme}>
                <ContexteListeThemes.Provider value={profils}>
                    {children}
                </ContexteListeThemes.Provider>
            </ContexteMiseAJourTheme.Provider>
        </ContexteTheme.Provider>
    )

}