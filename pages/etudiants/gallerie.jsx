import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import styles from "./gallerie.module.scss"

SwiperCore.use([Pagination]);

export default function gallerie() {
  return (
    <div className={styles.conteneurPage}>
        <h1>Vie étudiante</h1>
      <Swiper
        pagination={{
          clickable: true,
          el: "#lesPoints",
        }}
        spaceBetween={0}
        slidesPerView={4}
        slidesPerColumn={3}
        slidesPerColumnFill="row"
        observer={true}
        style={{ paddingTop: "2%", paddingLeft: "5%" }}
      >
        <SwiperSlide key={0}>
         
        </SwiperSlide>

        <div id="lesPoints" className={styles.points}></div>
      </Swiper>
    </div>
  );
}
