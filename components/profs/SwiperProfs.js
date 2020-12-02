import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CarteProf from "./CarteProf";
import styles from "./SwiperProf.module.scss";
import {motion} from "framer-motion";

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
        observer="true"
      >
        {listeProfs.map((infoProf) => {
          return (
            <SwiperSlide className={styles.uneSlide} key={infoProf.nom}>
              <CarteProf prof={infoProf}  />
            </SwiperSlide>
          );
        })}

        <motion.div id="lesPoints" whileHover={{scale: 1.2}} className={styles.points}></motion.div>
      </Swiper>
    </main>
  );
}
