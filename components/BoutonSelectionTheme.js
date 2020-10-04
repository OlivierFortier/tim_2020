import { useState } from "react";
import { useListeThemes, useTheme, useThemeMiseAJour } from "../hooks/contexteTheme";

export default function BoutonSelectionTheme() {

  const theme = useTheme();
  const changerTheme = useThemeMiseAJour()
  const listeThemes = useListeThemes()

  console.log(theme)

  return (
    <>
      <select onChange={(e)=> changerTheme(e.target.value)} aria-label="Changer theme">
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
