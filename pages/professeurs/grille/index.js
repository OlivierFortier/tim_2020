import { motion } from "framer-motion";
import styles from "./grille.module.scss";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

SwiperCore.use([Pagination]);

export default function Grille() {
  const pag = useRef();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.conteneur}
    >
      <Swiper pagination={{ clickable: true }}>
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <p>allo voici la description de camille</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <p>allo voici la description de camille</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <p>allo voici la description de camille</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.unProf}>
            <img src="/images/cam.jpg" className={styles.imgProf} alt="" />
            <p>allo voici la description de camille</p>
          </div>
        </SwiperSlide>

        {/* <div className="pag" style={{  color: "white"}}>
         
        </div> */}
      </Swiper>
    </motion.div>
  );
}
