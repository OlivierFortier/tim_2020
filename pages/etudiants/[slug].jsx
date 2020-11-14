import styles from "./pageUnProjet.module.scss";
import Image from "next/image";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../libs/requetesDonnes";
import { motion } from "framer-motion";

export default function PageUnProjet(leProjet) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.conteneurPage}
    >
      <section>
        <h1>{leProjet.titreDuProjet}</h1>
        <h2>{leProjet.typeDuProjet}</h2>
      </section>
    </motion.main>
  );
}

export async function getStaticProps({ params }) {
  const requeteGql = gql`
    query Projet($slug: String!) {
      projetTudiantCollection(where: { slug: $slug }) {
        items {
          titreDuProjet
          typeDuProjet
          lienExterne
          captureDcran {
            url
          }
        }
      }
    }
  `;

  const lesVariables = { slug: params.slug };

  const json = await faireRequeteGql(requeteGql, lesVariables);

  const leProjet = json.projetTudiantCollection.items[0];

  return { props: leProjet, revalidate: 1 };
}

export async function getStaticPaths() {
  const requeteGqlSlug = gql`
    {
      projetTudiantCollection {
        items {
          slug
        }
      }
    }
  `;

  const donnees = await faireRequeteGql(requeteGqlSlug);

  const listeProjets = donnees.projetTudiantCollection.items;

  const slugs = listeProjets.map((projet) => projet.slug);

  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,

    fallback: false,
  };
}
