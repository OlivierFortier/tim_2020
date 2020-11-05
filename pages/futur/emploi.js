import styles from "./perspectives.module.scss";
import Image from "next/image";

export default function Emploi() {
  return (
    <main className={styles.conteneurPage}>
      <h1>Perspective d'emplois</h1>
      <section className={styles.conteneurSection}>
        <Image src={"/images/persp.png"} width={625} height={464} />
        <article>
          {/* si il y a un titre, afficher */}
          <h2>Un taux de placement en emploi de 83,3%</h2>

          {/* a remplacer par du markdown */}
          <p className={styles.contenu}>
            Nos étudiants peuvent devenir : Spécialiste en expérience
            utilisateur (UX) Intégrateur multimédia Concepteur de niveau de jeux
            vidéos Développeur d’applications mobiles Animateur 2D/3D Chargé de
            projets numériques Designer graphique et infographiste Monteur vidéo
            Développeur Front-end Programmeur de jeux videos Artiste 3D
          </p>
        </article>
      </section>
    </main>
  );
}
