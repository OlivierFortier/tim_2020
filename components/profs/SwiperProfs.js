import SwiperCore, { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import CarteProf from "./CarteProf";
import styles from "./SwiperProf.module.scss";

SwiperCore.use([Pagination]);

export default function SwiperProfs({ listeProfs }) {
  return (
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
      {listeProfs.map((infoProf) => {
        return (
          <SwiperSlide key={infoProf.nom}>
            <CarteProf prof={infoProf} />
          </SwiperSlide>
        );
      })}

      <div id="lesPoints" className={styles.points}></div>
    </Swiper>
  );
}
