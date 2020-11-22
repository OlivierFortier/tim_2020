import styles from "./Navigation.module.scss"

export default function Navigation() {
  return (
    <footer className={styles.conteneurNavigation}>
      <span>
        <progress value={1} max={8}></progress>
      </span>
    </footer>
  );
}
