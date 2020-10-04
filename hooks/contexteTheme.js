import { createContext, useContext, useState } from "react";

 const profils = {art: 'art', code: 'code', parent: 'parent'}

 const ContexteTheme = createContext()
 const ContexteMiseAJourTheme = createContext()
 const ContexteListeThemes = createContext()

 export function useTheme() {
     return useContext(ContexteTheme)
 }

 export function useThemeMiseAJour() {
     return useContext(ContexteMiseAJourTheme)
 }

 export function useListeThemes() {
     return useContext(ContexteListeThemes)
 }

export function FournisseurTheme({ children }) {

    const [themeProfil, setThemeProfil] = useState(profils.art)

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