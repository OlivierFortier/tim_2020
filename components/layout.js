import { useEffect, useState } from "react";
import { useListeThemes, useTheme } from "../hooks/contexteTheme";
import EnTete from "./header/enTete";
import styles from "./layout.module.scss";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useRouter } from "next/router";
import { usePage } from "../hooks/usePage";
import { useEcranTactile } from "../hooks/useEcranTactile";
import { useEtatScroll } from "../hooks/contexteScroll";
import { Lethargy } from "lethargy";

import { useDrag, useScroll } from "react-use-gesture";

const lethargy = new Lethargy(30, 120, 0.05);

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

  const { listePages, anciennePage, page, prochainePage } = usePage();

  const { ecranTactile } = useEcranTactile();

  //état pour dire si on peut scroll d'une page à l'autre ou pas
  // const [arreterScroll, setArreterScroll] = useState(true);
  const arreterScroll = useEtatScroll();

  //gestion drag
  const drag = useDrag(
    ({ direction }) => {
      // console.log(direction[0]);
      if (direction[0] < 0) {
        router.push(listePages[prochainePage]);
      }
      if (direction[0] > 0) {
        router.push(listePages[anciennePage]);
      }
    },
    {
      threshold: 10,
      filterTaps: true,
      delay: 500,
    }
  );

  //gestion scroll

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
            // disableSwipe={!ecranTactile}
            // pauseListeners={arreterScroll}
            // upHandler={() => router.push(listePages[anciennePage])}
            // rightHandler={() => router.push(listePages[anciennePage])}
            // downHandler={() => router.push(listePages[prochainePage])}
            // leftHandler={() => router.push(listePages[prochainePage])}
          >
            <div
              {...drag()}
              id="conteneur-application"
              className={styles.conteneurApplication}
            >
              {children}
            </div>
          </ReactScrollWheelHandler>
        </div>
        <footer className={styles.conteneurProgres}>
          <span>
            <progress value={page} max={8}></progress>
          </span>
        </footer>
      </div>
    </>
  );
}
