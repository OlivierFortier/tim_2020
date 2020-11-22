import Modal from "react-modal";
import Image from "next/image";
import styles from "./ModalPhoto.module.scss";

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
      <div
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
              className={styles.image}
            />
          )}
        </div>
      </div>
    </Modal>
  );
}
