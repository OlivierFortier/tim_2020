import styles from "./Navigation.module.scss"

export default function Navigation() {
  return (
    <footer className={styles.conteneurNavigation}>
      <span className={styles.barreNavigation}>
        <button className={styles.boutonUneSection}>01</button>
        <button className={styles.boutonUneSection}>02</button>
        <button className={styles.boutonUneSection}>03</button>
        <button className={styles.boutonUneSection}>04</button>
        <button className={styles.boutonUneSection}>05</button>
        <button className={styles.boutonUneSection}>06</button>
        <button className={styles.boutonUneSection}>07</button>
        <progress value={6} max={7} className={styles.ligneProgres}></progress>
      </span>
    </footer>
  );
}
