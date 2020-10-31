import { motion } from "framer-motion";
import styles from "./grille.module.scss";
import SwiperCore, { Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../../libs/requetesDonnes";
import CarteProf from "../../../components/profs/CarteProf";

import Link from "next/link";

import Head from "next/head";

SwiperCore.use([Pagination]);

export default function Grille({ listeProfs }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.conteneur}
    >
      <Head>
        <title>TIM | Grille des professeurs</title>
        <meta
          name="Description"
          content="Grilles des proffesseurs de la Technique d'Intégration Multimédia du collège Maisonneuve"
        ></meta>
        <link
          rel="canonical"
          href="https://tim-2020.vercel.app/professeurs/grille"
        ></link>
      </Head>

      <Swiper
        pagination={{
          clickable: true,
          el: "#lesPoints",
        }}
        spaceBetween={0}
        slidesPerView={4}
        slidesPerColumn={3}
        slidesPerColumnFill="row"
        observer="true"
        style={{ paddingTop: "2%", paddingLeft: "5%" }}
      >
        {listeProfs.map((infoProf) => {
          return (
            <SwiperSlide key={infoProf.nom}>
              <CarteProf prof={infoProf} />
            </SwiperSlide>
          );
        })}

        <div id="lesPoints" className={styles.points}></div>
      </Swiper>
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
