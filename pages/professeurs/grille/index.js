import { motion } from "framer-motion";
import styles from "./grille.module.scss";
import SwiperCore, { Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../../libs/requetesDonnes";
import CarteProf from "../../../components/profs/CarteProf";

SwiperCore.use([Pagination]);

export default function Grille({ listeProfs }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.conteneur}
    >
      <Swiper
        pagination={{ clickable: true, el: "#lesPoints" }}
        spaceBetween={0}
        slidesPerView={4}
        slidesPerColumn={3}
        slidesPerColumnFill="row"
        observer="true"
        style={{ paddingTop: "2%", paddingLeft: "4%" }}
      >
        {listeProfs.map((infoProf) => {
          return (
            <SwiperSlide key={infoProf.nom} className={styles.nomProfs}>
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
