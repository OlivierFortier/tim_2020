import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from "./gallerie.module.scss";
import CarteProjet from "../../components/etudiants/CarteProjet";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../libs/requetesDonnes";
import { motion } from "framer-motion";
import Head from "next/head";

export default function projets(lesProjets) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
      className={styles.conteneurPage}
      key="grilleProjets"
    >
      <Head>
        <title>TIM | Projets étudiants</title>
        <meta
          name="Description"
          content="Page des projets étudiants des Techniques d'Intégration Multimédia du Collège Maisonneuve"
        />
        <link
          rel="canonical"
          href="https://tim.cmaisonneuve.qc.ca/étudiants/projets"
        />
        <meta
          property="og:title"
          content="Projets étudiants | TIM Maisonneuve"
        />
        <meta
          property="og:url"
          content="https://tim.cmaisonneuve.qc.ca/projets"
        />
        <meta
          property="og:description"
          content="Page des projets étudiants des Techniques d'Intégration Multimédia du Collège Maisonneuve"
        />
      </Head>
      <h1 className={styles.nomPage}>Projets étudiants</h1>
      <main className={styles.conteneurSwiper}>
        <Swiper
          pagination={{
            clickable: true,
            el: "#lesPoints"
          }}
          spaceBetween={30}
          slidesPerView={3}
          slidesPerColumn={2}
          slidesPerColumnFill="row"
          breakpoints={{
            310: {
              spaceBetween: 30,
              slidesPerColumn: 3,
              slidesPerView: 2
            },

            425: {
              spaceBetween: 30,
              slidesPerColumn: 3,
              slidesPerView: 2
            },
            768: {
              spaceBetween: 30,
              slidesPerColumn: 3,
              slidesPerView: 3
            },

            1025: {
              spaceBetween: 30,
              slidesPerColumn: 2,
              slidesPerView: 3
            }
          }}
        >
          {lesProjets.items.map((projet, index) => {
            return (
              <SwiperSlide className={styles.uneSlide} key={index}>
                <CarteProjet infoCarte={projet} />
              </SwiperSlide>
            );
          })}

          <motion.div id="lesPoints" className={styles.points} />
        </Swiper>
      </main>
    </motion.div>
  );
}

export async function getStaticProps({ params }) {
  const requeteGql = gql`
    query {
      projetTudiantCollection {
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

  const json = await faireRequeteGql(requeteGql);

  const lesProjets = json.projetTudiantCollection;

  return { props: lesProjets, revalidate: 1 };
}
