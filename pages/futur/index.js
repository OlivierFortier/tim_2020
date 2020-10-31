import styles from "./futur.module.scss";

export default function Futur() {
  return (
    <main className={styles.conteneurPage}>
      <section className={styles.sectionUni}>
        <h1>Perspective universitaire</h1>
        <h3>Poursuivre ses études et approfondir ses connaissances.</h3>
      </section>

      <section className={styles.sectionStage}>
        <h1>Stages</h1>
        <h3>Mettre en pratique ses apprentissages.</h3>
      </section>

      <section className={styles.sectionEmploi}>
        <h1>Perspectives d'emploi</h1>
        <h3>Devenir un professionnel dans le domaine.</h3>
      </section>
    </main>
  );
}
