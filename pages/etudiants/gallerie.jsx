import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import styles from "./gallerie.module.scss";
import CarteEtudiant from "../../components/etudiants/CarteEtudiant";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../libs/requetesDonnes";
import Modal from "react-modal";
import ModalPhoto from "../../components/etudiants/ModalPhoto";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

SwiperCore.use([Pagination]);

export default function gallerie(lesPhotos) {
  const [photoActuelle, setPhotoActuelle] = useState(null);
  const [modalOuvert, setModalOuvert] = useState(false);

  function ouvrirModalPhotoActuelle(photo) {
    setPhotoActuelle(photo);
    setModalOuvert(true);
  }

  function fermerModal() {
    setModalOuvert(false);
    setPhotoActuelle(null);
  }

  useEffect(() => {
    Modal.setAppElement("#__next");
  }, [photoActuelle]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.conteneurPage}
      key={Math.random()*100}
    >
    <Head>
    <title>TIM | Vie Étudiante</title>
        <meta charset="UTF-8"></meta>
        <meta
          name="Description"
          content="Page de la gallerie de photo qui montre les étudints de la Technique d'Intégration Multimédia du collège Maisonneuve"
        ></meta>
        <link rel="canonical" href="https://tim-2020.vercel.app/etudiants/gallerie"></link>
    </Head>
      <ModalPhoto
        infoPhoto={photoActuelle}
        ouvert={modalOuvert}
        fermerModal={fermerModal}
      ></ModalPhoto>
      <h1 className={styles.nomPage}>Vie étudiante</h1>

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
          {lesPhotos.items.map((photo, index) => {
            return (
              <SwiperSlide className={styles.uneSlide} key={index}>
                <CarteEtudiant
                  infoCarte={photo}
                  ouvrirModal={ouvrirModalPhotoActuelle}
                />
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
    query PhotosEtudiants {
      photoTudianteCollection {
        items {
          titredescriptionDeLaPhoto
          slug
          photo {
            url
          }
        }
      }
    }
  `;

  const json = await faireRequeteGql(requeteGql);

  const lesPhotos = json.photoTudianteCollection;

  return { props: lesPhotos, revalidate: 1 };
}
