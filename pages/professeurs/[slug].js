import styles from "./pageUnProf.module.scss";
import Image from "next/image";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../libs/requetesDonnes";
import Markdown from "markdown-to-jsx";

export default function PageUnProfesseur(leProf) {
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
            <h1>{leProf.nom}</h1>
            <h5>{leProf.specialisation}</h5>
          </span>

          <div className={styles.contenuTexte}>
            <Markdown>{leProf.description}</Markdown>
          </div>
        </article>
      </section>
    </main>
  );
}

export async function getStaticProps({ params }) {
  const requeteGql = gql`
    query Professeurs($slug: String!) {
      professeurCollection(where: { slug: $slug }) {
        items {
          nom
          specialisation
          description
          slug
          photo {
            url
          }
        }
      }
    }
  `;

  const lesVariables = { slug: params.slug };

  const json = await faireRequeteGql(requeteGql, lesVariables);

  const leProf = json.professeurCollection.items[0];

  console.log(leProf);

  return { props: leProf, revalidate: 1 };
}

export async function getStaticPaths() {
  const requeteGqlSlug = gql`
    {
      professeurCollection {
        items {
          slug
        }
      }
    }
  `;

  const donnees = await faireRequeteGql(requeteGqlSlug);

  const listeProfs = donnees.professeurCollection.items;

  const slugs = listeProfs.map((prof) => prof.slug);

  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,

    fallback: false,
  };
}
