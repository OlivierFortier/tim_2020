import { useEffect, useState } from "react";
import { useListeThemes, useTheme } from "../hooks/contexteTheme";
import EnTete from "./header/enTete";
import styles from "./layout.module.scss";
import { useRouter } from "next/router";
import { usePage } from "../hooks/usePage";
import { useEcranTactile } from "../hooks/useEcranTactile";
import { useEtatScroll } from "../hooks/contexteScroll";
import { useSwipeable } from "react-swipeable";

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

  //état pour dire si on peut scroll d'une page à l'autre ou pas
  // const [arreterScroll, setArreterScroll] = useState(true);
  const arreterScroll = useEtatScroll();

  const [scrollAccumule, setScrollAccumule] = useState(0);

  //gestion drag
  const drag = useSwipeable({
    onSwipedLeft: () => router.push(listePages[prochainePage]),
    onSwipedRight: () => router.push(listePages[anciennePage]),
    delta: 100,
    preventDefaultTouchmoveEvent: true,
  });

  //gestion scroll
  function roulette(evenement) {
    //on peut changer la valeur du scroll minimum nécéssaire afin de changer de page
    if (scrollAccumule >= 1600) {
      setScrollAccumule(0);

      evenement.deltaY > 0 && router.push(listePages[prochainePage]);
      evenement.deltaY < 0 && router.push(listePages[anciennePage]);

      return;
    }

    setScrollAccumule(
      (ancienScroll) => ancienScroll + Math.abs(evenement.deltaY)
    );
  }

  //gestion clavier
  function clavier(evenement) {
    switch (evenement.key) {
      case "ArrowRight":
        router.push(listePages[prochainePage]);
        break;

      case "ArrowLeft":
        router.push(listePages[anciennePage]);
        break;

      default:
        router.push(listePages[prochainePage]);
        break;
    }
  }

  return (
    <>
      <div
        className={styles.racine}
        style={{ backgroundColor: themeStyles.couleurBg }}
      >
        <div className={styles.conteneurTout}>
          <EnTete></EnTete>
          <div
            id="conteneur-application"
            className={styles.conteneurApplication}
            onWheel={(e) => roulette(e)}
            onKeyDown={(e) => clavier(e)}
            tabIndex={0}
          >
            {children}
          </div>
        </div>
        <footer {...drag} className={styles.conteneurProgres}>
          <span>
            <progress value={page} max={8}></progress>
          </span>
        </footer>
      </div>
    </>
  );
}
