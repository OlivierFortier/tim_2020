import { motion } from 'framer-motion';
import { gql } from 'graphql-request';
import Head from 'next/head';
import styles from './grille.module.scss';
import { faireRequeteGql } from '../../../libs/requetesDonnes';
import SwiperProfs from '../../../components/profs/SwiperProfs';

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
        />
        <link
          rel="canonical"
          href="https://tim.cmaisonneuve.qc.ca/professeurs/grille"
        />
        <meta
          property="og:title"
          content="Grille des profs | TIM Maisonneuve"
        />
        <meta
          property="og:url"
          content="https://tim.cmaisonneuve.qc.ca/professeurs/grille"
        />
        <meta
          property="og:description"
          content="Grille des professeurs des Technique d'Intégration Multimédia du Collège Maisonneuve"
        />
      </Head>
      <SwiperProfs listeProfs={listeProfs} />
    </motion.div>
  );
}

export async function getStaticProps() {
  const requeteListeProfs = gql`
    {
      professeurCollection {
        items {
          nom
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

  // je fais ma requete
  const res = await faireRequeteGql(requeteListeProfs);
  const listeProfs = res.professeurCollection.items;

  return {
    props: {
      listeProfs,
    },
    revalidate: 1,
  };
}
