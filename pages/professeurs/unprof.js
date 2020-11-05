import styles from "./unprof.module.scss";
import Image from "next/image";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../libs/requetesDonnes";

export default function unprof({ leProf }) {
  return (
    <main className={styles.conteneurPage}>
      <section>
        <Image
          className={styles.imgProf}
          src={leProf.photo.url}
          width={453}
          height={620}
        />
        <article>
          <span className={styles.conteneurTitres}>
            <h1>Denis Pellerin</h1>
            <h5>Professeur de design et de vidéo</h5>
          </span>

          {/* markdown plus tard */}
          <div className={styles.contenuTexte}>
              <p>
                Après des études collégiales en arts, lettres et communications où
                il reçoit trois mentions d'excellence pour ses réalisations
                audiovisuelles, Denis poursuit ses études en production
                cinématographique à l'université Concordia où on lui décerne le
                "Fine Arts Dean's Award 1989".
              </p>
          </div>
        </article>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const requeteListeProfs = gql`
    {
      professeur(id: "1IT4hgGmqrmq4RkttDuuJU") {
        photo {
          url
        }
      }
    }
  `;

  //je fais ma requete
  const res = await faireRequeteGql(requeteListeProfs);
  const leProf = res.professeur;

  return {
    props: {
      leProf,
    },
    revalidate: 1,
  };
}
