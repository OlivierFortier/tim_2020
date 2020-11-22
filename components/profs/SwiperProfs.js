import SwiperCore, { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import CarteProf from "./CarteProf";
import styles from "./SwiperProf.module.scss";

SwiperCore.use([Pagination]);

export default function SwiperProfs({ listeProfs }) {
  return (
    <main className={styles.conteneurSwiper}>
      <Swiper
        pagination={{
          clickable: true,
          el: "#lesPoints",
        }}
        spaceBetween={0}
        slidesPerView={4}
        slidesPerColumn={3}
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
            spaceBetween: 0,
            slidesPerColumn: 3,
            slidesPerView: 4,
          },
        }}
        slidesPerColumnFill="row"
        observer
      >
        {listeProfs.map((infoProf) => {
          return (
            <SwiperSlide className={styles.uneSlide} key={infoProf.nom}>
              <CarteProf prof={infoProf} />
            </SwiperSlide>
          );
        })}

        <div id="lesPoints" className={styles.points}></div>
      </Swiper>
    </main>
  );
}
