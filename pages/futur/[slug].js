import styles from "./perspectives.module.scss";
import Image from "next/image";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../libs/requetesDonnes";
import Markdown from "markdown-to-jsx";
import { motion } from "framer-motion";

export default function unFutur(leFutur) {
  return (
    <main className={styles.conteneurPage}>
      <h1>{leFutur.titre}</h1>
      <section className={styles.conteneurSection}>
        <Image src={leFutur.image.url} width={625} height={464} />
        <article>
          {/* si il y a un titre, afficher */}
          <h2>{leFutur.enTte}</h2>

          
          {/* <p className={styles.contenu}>
            Nos étudiants peuvent devenir : Spécialiste en expérience
            utilisateur (UX) Intégrateur multimédia Concepteur de niveau de jeux
            vidéos Développeur d’applications mobiles Animateur 2D/3D Chargé de
            projets numériques Designer graphique et infographiste Monteur vidéo
            Développeur Front-end Programmeur de jeux videos Artiste 3D
          </p> */}
          <Markdown className={styles.contenu}>
            {leFutur.contenu}
          </Markdown>
        </article>
      </section>
    </main>
  );
}

export async function getStaticProps({ params }) {
  const requeteGql = gql`
    query Futurs($slug: String!) {
      futurCollection(where: { slug: $slug }) {
        items {
          titre
          enTte
          contenu
          image {
            url
          }
        }
      }
    }
  `;

  const lesVariables = { slug: params.slug };

  const json = await faireRequeteGql(requeteGql, lesVariables);

  const leFutur = json.futurCollection.items[0];

  return { props: leFutur, revalidate: 1 };
}

export async function getStaticPaths() {
  const requeteGqlSlug = gql`
    {
      futurCollection {
        items {
          slug
        }
      }
    }
  `;

  const donnees = await faireRequeteGql(requeteGqlSlug);

  const listeFuturs = donnees.futurCollection.items;

  const slugs = listeFuturs.map((futur) => futur.slug);

  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
