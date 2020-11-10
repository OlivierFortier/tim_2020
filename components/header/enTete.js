import Menu from "./menu";
import BoutonSelectionTheme from "./boutonSelectionTheme";
import styles from "./enTete.module.scss";


export default function EnTete() {



  
  // if on est sur composant page intro

  return (
    <>
      <header id="header-site" className={styles.enTete}>
        <span>
          <BoutonSelectionTheme />
          <h1 className={styles.titre}>
            Techniques d'intégration multimédia
          </h1>
        </span>
        <Menu />
      </header>
    </>
  );
}
