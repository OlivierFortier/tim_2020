import styles from "./pageUnFutur.module.scss";
import Image from "next/image";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../libs/requetesDonnes";
import Markdown from "markdown-to-jsx";
import { motion } from "framer-motion";

export default function unFutur(leFutur) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.conteneurPage}
    >
      <h1>{leFutur.titre}</h1>
      <section className={styles.conteneurSection}>
        <Image
          className={styles.image}
          layout="fill"
          src={leFutur.image.url}
          unsized="true"
          // width={625}
          // height={464}
        />
        <article>
          {leFutur.enTte && <h2>{leFutur.enTte}</h2>}

          <Markdown className={styles.contenu}>{leFutur.contenu}</Markdown>
        </article>
      </section>
    </motion.main>
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
