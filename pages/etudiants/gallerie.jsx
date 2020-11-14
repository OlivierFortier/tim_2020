import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import styles from "./gallerie.module.scss";
import CarteEtudiant from "../../components/etudiants/CarteEtudiant";
import { gql } from "graphql-request";
import { faireRequeteGql } from "../../libs/requetesDonnes";
import Modal from "react-modal";
import ModalPhoto from "../../components/etudiants/ModalPhoto";

SwiperCore.use([Pagination]);


export default function gallerie(lesPhotos) {


  return (
    <div className={styles.conteneurPage}>
      <h1>Vie étudiante</h1>
    {/* <ModalPhoto></ModalPhoto> */}
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
          <SwiperSlide className={styles.uneSlide} key={0}>
            <CarteEtudiant></CarteEtudiant>
          </SwiperSlide>
          <SwiperSlide className={styles.uneSlide} key={1}>
            <CarteEtudiant></CarteEtudiant>
          </SwiperSlide>
          <SwiperSlide className={styles.uneSlide} key={2}>
            <CarteEtudiant></CarteEtudiant>
          </SwiperSlide>
          <SwiperSlide className={styles.uneSlide} key={3}>
            <CarteEtudiant></CarteEtudiant>
          </SwiperSlide>
          <SwiperSlide className={styles.uneSlide} key={4}>
            <CarteEtudiant></CarteEtudiant>
          </SwiperSlide>
          <SwiperSlide className={styles.uneSlide} key={5}>
            <CarteEtudiant></CarteEtudiant>
          </SwiperSlide>
          <SwiperSlide className={styles.uneSlide} key={6}>
            <CarteEtudiant></CarteEtudiant>
          </SwiperSlide>
          <SwiperSlide className={styles.uneSlide} key={7}>
            <CarteEtudiant></CarteEtudiant>
          </SwiperSlide>
          <SwiperSlide className={styles.uneSlide} key={8}>
            <CarteEtudiant></CarteEtudiant>
          </SwiperSlide>
          <SwiperSlide className={styles.uneSlide} key={9}>
            <CarteEtudiant></CarteEtudiant>
          </SwiperSlide>
          <SwiperSlide className={styles.uneSlide} key={10}>
            <CarteEtudiant></CarteEtudiant>
          </SwiperSlide>
          <SwiperSlide className={styles.uneSlide} key={11}>
            <CarteEtudiant></CarteEtudiant>
          </SwiperSlide>

          <div id="lesPoints" className={styles.points}></div>
        </Swiper>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {

    Modal.setAppElement('__next')

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
