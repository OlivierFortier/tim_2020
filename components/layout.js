import { useEffect, useState } from "react";
import { useListeThemes, useTheme } from "../hooks/contexteTheme";
import EnTete from "./header/enTete";
import styles from "./layout.module.scss";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useRouter } from "next/router";
import { usePage } from "../hooks/usePage";
import { useEcranTactile } from "../hooks/useEcranTactile";

export default function Layout({ children }) {
  const router = useRouter();

  //grace au thème, on peut changer le css dynamiquement avec javascript selon le thème choisi
  const theme = useTheme();
  const listeThemes = useListeThemes();

  const [themeStyles, setThemeStyles] = useState({ couleurBg: "#110c12" });

  useEffect(() => {
    switch (theme) {
      case listeThemes.art:
        setThemeStyles({
          couleurBg: "#110c12",
        });
        break;

      case listeThemes.code:
        setThemeStyles({
          couleurBg: "#110c12",
        });
        break;

      case listeThemes.parent:
        setThemeStyles({
          couleurBg: "#F3F1F1",
        });
        break;

      default:
        setThemeStyles({
          couleurBg: "#110c12",
        });

        break;
    }
  }, [theme]);

  const { listePages, anciennePage, prochainePage } = usePage();

  const {ecranTactile} = useEcranTactile();

  return (
    <>
      <div
        className={styles.racine}
        style={{ backgroundColor: themeStyles.couleurBg }}
      >
        <div className={styles.conteneurTout}>
          <EnTete></EnTete>
          <ReactScrollWheelHandler
            style={{ all: "unset" }}
            disableSwipe={!ecranTactile}
            upHandler={() => router.push(listePages[anciennePage])}
            rightHandler={() => router.push(listePages[anciennePage])}
            downHandler={() => router.push(listePages[prochainePage])}
            leftHandler={() => router.push(listePages[prochainePage])}
          >
            <div
              id="conteneur-application"
              className={styles.conteneurApplication}
            >
              {children}
            </div>
            <footer>
              <progress value={5} max={8}></progress>
            </footer>
          </ReactScrollWheelHandler>
        </div>
      </div>
    </>
  );
}
