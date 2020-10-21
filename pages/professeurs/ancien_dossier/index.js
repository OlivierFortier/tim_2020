import { faireRequeteGql, graphQLClient } from "../../../libs/requetesDonnes";
import Prof from "../../../components/profs/prof";
import Link from "next/link";
import Head from "next/head";
import { gql } from "graphql-request";
import Modal from "react-modal";
import { useRouter } from "next/router";

import useSWR from "swr";
import styles from "./ancien_professeurs.module.scss";
import { motion } from "framer-motion";

//configuration de l'élément racine de l'application pour le modal
Modal.setAppElement("#__next");

export default function Professeurs({ listeProfs }) {
  //j'organise mes données pour avoir seulement ce que j'ai besoin dans le json reçu en props/arguments
  const lesProfs = listeProfs.professeurCollection.items;

  //j'ai besoin des fonctionnalités du routeur alors j'importe ce module et je l'initialise
  const router = useRouter();

  //je vais chercher les parametres d'url
  const slug = router.query.slug;

  //je prépare une requete gql afin d'avoir les données d'un professeurs selon l'url. ex : /professeurs/camille
  const requeteGqlInfoProf = gql`
    query Professeurs($slug: String!) {
      professeurCollection(where: { slug: $slug }) {
        items {
          nom
          description
        }
      }
    }
  `;

  //j'utilise le hook useSWR pour chercher des données au CMS en même temps d'effectuer le rendu. pas besoin de comprendre comment ca marche , vous pouvez juste le copier
  const { data, error } = useSWR(
    slug ? [requeteGqlInfoProf, slug] : null,
    (requete, slug) => graphQLClient.request(requete, { slug: slug })
  );

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className={styles.conteneur}
    >
      <Head>
        <title>TIM | Professeurs</title>
        <meta
          name="Description"
          content="Page contenant la liste des professeurs des Techniques d'Intégration Multimédia du collège Maisonneuve"
        ></meta>
        <link
          rel="canonical"
          href="https://tim-2020.vercel.app/professeurs"
        ></link>
      </Head>
      <h1>Voici la page des professeurs</h1>
      <ul>
        {lesProfs.map((prof, index) => {
          return (
            <li key={prof.slug + index}>
              <Link
                href={`/professeurs/ancien_dossier/?slug=${prof.slug}`}
                as={`/professeurs/ancien_dossier/${prof.slug}`}
              >
                <a>{prof.nom}</a>
              </Link>
            </li>
          );
        })}
      </ul>

      <Modal
        parentSelector={() => document.querySelector("#conteneur-application")}
        onRequestClose={() => router.push("/professeurs")}
        isOpen={!!router.query.slug}
        contentLabel={`modal ${router.query.slug}`}
      >
        {error && <h1>Erreur lors du chargement</h1>}
        {!data && <h1>Chargement...</h1>}
        {data && <Prof unProf={data} />}
      </Modal>
    </motion.div>
  );
}

//dans cette fonction je vais chercher les données dont j'ai besoin initialement pour afficher la page.
//en l'occurence, ce sont les noms de tous les profs
export async function getStaticProps() {
  //je prépare ma requete graphQl pour avoir la liste des noms et des slugs de tous les profs
  const requeteGqlTousLesProfs = gql`
    {
      professeurCollection {
        items {
          nom
          slug
        }
      }
    }
  `;

  //je fais ma requete
  const listeProfs = await faireRequeteGql(requeteGqlTousLesProfs);

  //je retourne la liste des profs, et je revalide à chaque seconde
  return {
    props: {
      listeProfs,
    },
    revalidate: 1,
  };
}
