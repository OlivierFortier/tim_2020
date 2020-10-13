import Menu from "./menu";
import BoutonSelectionTheme from "./boutonSelectionTheme";
import { useRouter } from "next/router";
import styles from "./enTete.module.scss";

export default function EnTete() {
  const router = useRouter();

  const espaceHeader = router.pathname === "/" ? "space-between" : "flex-end";

  return (
    <>
      <header
        className={styles.enTete}
        style={{ justifyContent: espaceHeader }}
      >
        {router.pathname === "/" && (
          <span>
            <BoutonSelectionTheme />
            <div className={styles.titre}>
              Techniques d'intégration multimédia
            </div>
          </span>
        )}
        <Menu />
      </header>
    </>
  );
}
