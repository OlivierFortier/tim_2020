import { createContext } from "react";
import EnTete from "./enTete";

export default function Layout({ children }) {
  
  export const contexteTheme = createContext();

  return (
    <>
      <contexteTheme.Provider value={}>
        <div>
          <EnTete></EnTete>
          <div id="conteneur-application">{children}</div>
        </div>
      </contexteTheme.Provider>

      <style jsx>{`
        div {
          background-color: #110c12;
          height: 100vh;
        }

        #conteneur-application {
          display: flex;
          justify-content: center;
          height: 100%;
        }
      `}</style>
    </>
  );
}
