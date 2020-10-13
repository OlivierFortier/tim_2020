import Link from "next/link"
import styles from "./accueil.module.scss"

export default function Accueil() {

  const padding_left_texte = "55px";

  return (
    <>
      <main className={styles.accueilMain}>
        <h1 className={styles.titreIntro}>
          La<br></br> juxtaposition du <br></br>
          <strong>logique</strong> et du<br></br>
          <strong>créatif +</strong> 
        </h1>
        <h2 className={styles.nomCollege}>Collège de Maisonneuve</h2>
      </main>
      <aside className={styles.accueilAside}>
        <span>
          <div className={styles.cercleInterractif}></div>
        </span>
        <img
          alt="image du theme"
          src="https://images.unsplash.com/photo-1599666433232-2b222eb02b8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        ></img>
        <div className={styles.conteneurBouton}>
          <Link href="/cours" as="/cours">
            <button className={styles.boutonExplorer} aria-label="explorer">
              EXPLOREZ
            </button>
          </Link>
        </div>
      </aside>
    </>
  );
}
