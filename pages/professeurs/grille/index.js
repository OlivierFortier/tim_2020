import { motion } from "framer-motion";
import styles from "./grille.module.scss";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../../libs/requetesDonnes";
import Head from "next/head";
import SwiperProfs from "../../../components/profs/SwiperProfs";



export default function Grille({ listeProfs }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.conteneur}>
      <Head>
        <title>TIM | Grille des professeurs</title>
        <meta
          name="Description"
          content="Grilles des proffesseurs de la Technique d'Intégration Multimédia du collège Maisonneuve"
        ></meta>
        <link rel="canonical" href="https://tim-2020.vercel.app/professeurs/grille"></link>
      </Head>
     <SwiperProfs listeProfs={listeProfs}/>
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
          }
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
