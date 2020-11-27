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
      key="pageUnProjet"
    >
      <h1 className={styles.nomPage}>Projets étudiants</h1>
      <section className={styles.sectionPrincipale}>
        <span className={styles.conteneurImage}>
        <Image
          unsized
          layout="fill"
          src={leProjet?.captureDcran?.url}
          loading="eager"
          quality={75}
          className={styles.image}
          alt={`photo de ${leProjet.titreDuProjet}`}
        />
        </span>
        <span className={styles.infoProjet}>
          
          <h1>{leProjet.typeDuProjet}</h1>
          <h2>{leProjet.titreDuProjet}</h2>
        </span>
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
