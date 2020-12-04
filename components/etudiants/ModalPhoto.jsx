import Modal from "react-modal";
import Image from "next/image";
import styles from "./ModalPhoto.module.scss";
import {motion} from "framer-motion";

export default function ModalPhoto({ infoPhoto, ouvert, fermerModal }) {
  return (
    <Modal
      style={{
        overlay: {
          zIndex: 10,
        },
      }}
      overlayClassName={styles.leModalFond}
      className={styles.leModal}
      isOpen={ouvert}
      onRequestClose={fermerModal}
    >
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (e.target === e.currentTarget) {
            fermerModal();
          }
        }}
        className={styles.conteneurModal}
      >
        <div className={styles.conteneurImage}>
          {infoPhoto && ouvert && (
            <Image
              src={infoPhoto.photo.url}
              layout="fill"
              unsized
              quality={75}
              alt={`photo étudiante`}
              className={styles.image}
            />
          )}
        </div>
      </motion.div>
    </Modal>
  );
}
