import styles from "./pageUnProjet.module.scss";
import Image from "next/image";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../libs/requetesDonnes";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

export default function PageUnProjet(leProjet) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
      className={styles.conteneurPage}
      key="pageUnProjet"
    >
      <Head>
        <title>TIM | {leProjet.titreDuProjet}</title>
        <meta
          name="Description"
          content={`${leProjet.titreDuProjet} projet étudiant des Techniques d'Intégration Multimédia du Collège Maisonneuve`}
        />
        <link
          rel="canonical"
          href={`https://tim.cmaisonneuve.qc.ca/etudiants/${leProjet.slug}`}
        />
        <meta
          property="og:title"
          content={`${leProjet.titreDuProjet} | TIM Maisonneuve`}
        />
        <meta
          property="og:url"
          content={`https://tim.cmaisonneuve.qc.ca/etudiants/${leProjet.slug}`}
        />
        <meta
          property="og:description"
          content={`${leProjet.titreDuProjet} projet étudiant des Techniques d'Intégration Multimédia du Collège Maisonneuve`}
        />
        <meta name="robots" content="noindex" />
      </Head>
      <h1 className={styles.nomPage}>
        {leProjet.titreDuProjet}
        <br />
        <Link href="/etudiants/projets">Retour</Link>
      </h1>
      {/* add a next.js link to the /projets page */}
      <section className={styles.sectionPrincipale}>
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className={styles.conteneurImage}
        >
          <Image
            unsized
            layout="fill"
            src={leProjet?.captureDcran?.url}
            loading="eager"
            quality={75}
            className={styles.image}
            alt={`photo de ${leProjet.titreDuProjet}`}
          />
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className={styles.infoProjet}
        >
          <h2>
            {leProjet?.descriptionDuProjet || "Aucune description disponible"}
          </h2>
          {leProjet.lienExterne && (
            <a
              target="_blank"
              href={leProjet.lienExterne}
              className={styles.lienProjet}
            >
              Consulter le projet
            </a>
          )}
        </motion.span>
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
          slug
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

    fallback: false
  };
}
