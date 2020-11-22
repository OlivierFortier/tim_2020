import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import styles from "./gallerie.module.scss";
import CarteProjet from "../../components/etudiants/CarteProjet";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../libs/requetesDonnes";
import { motion } from "framer-motion";

SwiperCore.use([Pagination]);

export default function projets(lesProjets) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.conteneurPage}
    >
      <h1 className={styles.nomPage}>Projets étudiants</h1>
      <main className={styles.conteneurSwiper}>
        <Swiper
          pagination={{
            clickable: true,
            el: "#lesPoints",
          }}
          spaceBetween={30}
          slidesPerView={3}
          slidesPerColumn={2}
          slidesPerColumnFill="row"
          breakpoints={{
            310: {
              spaceBetween: 30,
              slidesPerColumn: 3,
              slidesPerView: 2,
            },
  
            425: {
              spaceBetween: 30,
              slidesPerColumn: 3,
              slidesPerView: 2,
            },
            768: {
              spaceBetween: 30,
              slidesPerColumn: 3,
              slidesPerView: 3,
            },
  
            1025: {
              spaceBetween: 30,
              slidesPerColumn: 2,
              slidesPerView: 3,
            },
          }}
        >
          {lesProjets.items.map((projet, index) => {
            return (
              <SwiperSlide className={styles.uneSlide} key={index}>
                <CarteProjet infoCarte={projet} />
              </SwiperSlide>
            );
          })}

          <div id="lesPoints" className={styles.points}></div>
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
