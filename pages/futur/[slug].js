import styles from "./pageUnFutur.module.scss";
import Image from "next/image";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../libs/requetesDonnes";
import Markdown from "markdown-to-jsx";
import { motion } from "framer-motion";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";

export default function unFutur(leFutur) {


  const large = useMediaQuery({minWidth : 1024});

  console.log(large)

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
      className={styles.conteneurPage}
      key="pageUnFutur"
    >
      <Head>
        <title>TIM | {leFutur.titre}</title>
        <meta
          name="Description"
          content={`${leFutur.titre} : Opportunités des Techniques d'Intégration Multimédia du Collège Maisonneuve`}
        ></meta>
        <link
          rel="canonical"
          href={`https://tim-2020.vercel.app/futur/${leFutur.slug}`}
        ></link>
        <meta
          property="og:title"
          content={`${leFutur.titre} | TIM Maisonneuve`}
        />
        <meta
          property="og:url"
          content={`https://tim-2020.vercel.app/futur/${leFutur.slug}`}
        />
        <meta
          property="og:description"
          content={`${leFutur.titre} : Opportunités des Techniques d'Intégration Multimédia du Collège Maisonneuve`}
        />
      </Head>
      <h1>{leFutur.titre}</h1>
      <motion.section initial={{x: -100, opacity: 0}} animate={{x:0, opacity: 1}} transition={{duration: 0.75}} className={styles.conteneurSection}>
        <Image
          className={styles.image}
          layout="fill"
          src={leFutur.image.url}
          unsized="true"
          quality={100}
          alt="représentation d'étude et de travail"
          // width={625}
          // height={464}
        />
        <motion.article initial={{y: 100, opacity: 0}} animate={{y:0, opacity: 1}} transition={{delay: 0.50, duration: 0.75}}>
          {leFutur.enTte && <h2>{leFutur.enTte}</h2>}

          <Markdown className={styles.contenu}
          >
            {leFutur.contenu}
          </Markdown>
        </motion.article>
      </motion.section>
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
          slug
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
