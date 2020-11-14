import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import styles from "./gallerie.module.scss";
import CarteEtudiant from "../../components/etudiants/CarteEtudiant";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../libs/requetesDonnes";
import Modal from "react-modal";
import ModalPhoto from "../../components/etudiants/ModalPhoto";
import { useState, useEffect } from "react";

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
    <div className={styles.conteneurPage}>
      <ModalPhoto
        infoPhoto={photoActuelle}
        ouvert={modalOuvert}
        fermerModal={fermerModal}
      ></ModalPhoto>
      <h1>Vie étudiante</h1>

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
    </div>
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
