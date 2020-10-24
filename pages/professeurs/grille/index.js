import { motion } from "framer-motion";
import styles from "./grille.module.scss";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination]);

export default function Grille() {
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
        style={{ paddingTop: "2%", paddingLeft: "1%" }}
      >
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <h3>God of TIM</h3>
            <h4>BABA PROGRAMMATION</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <h3>God of TIM</h3>
            <h4>BABA PROGRAMMATION</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <h3>God of TIM</h3>
            <h4>BABA PROGRAMMATION</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <h3>God of TIM</h3>
            <h4>BABA PROGRAMMATION</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <h3>God of TIM</h3>
            <h4>BABA PROGRAMMATION</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <h3>God of TIM</h3>
            <h4>BABA PROGRAMMATION</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <h3>God of TIM</h3>
            <h4>BABA PROGRAMMATION</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <h3>God of TIM</h3>
            <h4>BABA PROGRAMMATION</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <h3>God of TIM</h3>
            <h4>BABA PROGRAMMATION</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <h3>God of TIM</h3>
            <h4>BABA PROGRAMMATION</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <h3>God of TIM</h3>
            <h4>BABA PROGRAMMATION</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <h3>God of TIM</h3>
            <h4>BABA PROGRAMMATION</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <h3>God of TIM</h3>
            <h4>BABA PROGRAMMATION</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <h3>God of TIM</h3>
            <h4>BABA PROGRAMMATION</h4>
          </div>
        </SwiperSlide>

        {/* =============================== */}

        <div id="lesPoints" className={styles.points}></div>
      </Swiper>
    </motion.div>
  );
}
