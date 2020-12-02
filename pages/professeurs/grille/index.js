import { motion } from "framer-motion";
import styles from "./grille.module.scss";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../../libs/requetesDonnes";
import Head from "next/head";
import SwiperProfs from "../../../components/profs/SwiperProfs";

export default function Grille({ listeProfs }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
      className={styles.conteneurPage}
      key="grilleProfs"
    >
      <Head>
        <title>TIM | Grille des professeurs</title>
        <meta
          name="Description"
          content="Grille des professeurs des Techniques d'Intégration Multimédia du Collège Maisonneuve"
        ></meta>
        <link
          rel="canonical"
          href="https://tim-2020.vercel.app/professeurs/grille"
        ></link>
        <meta
          property="og:title"
          content="Grille des profs | TIM Maisonneuve"
        />
        <meta
          property="og:url"
          content="https://tim-2020.vercel.app/professeurs/grille"
        />
        <meta
          property="og:description"
          content="Grille des professeurs des Technique d'Intégration Multimédia du Collège Maisonneuve"
        />
      </Head>
      <SwiperProfs listeProfs={listeProfs}  />
    </motion.div>
  );
}

export async function getStaticProps() {
  const requeteListeProfs = gql`
    {
      professeurCollection {
        items {
          nom
          specialisation
          photo {
            url
            width
            height
          }
          slug
        }
      }
    }
  `;

  //je fais ma requete
  const res = await faireRequeteGql(requeteListeProfs);
  const listeProfs = res.professeurCollection.items;

  return {
    props: {
      listeProfs,
    },
    revalidate: 1,
  };
}
