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
      isOpen={ouvert}
      onRequestClose={fermerModal}
    >
      <div className={styles.conteneurImage}>
        {infoPhoto && ouvert && (
          <Image
            src={infoPhoto.photo.url}
            layout="fill"
            unsized
            className={styles.image}
          />
        )}
      </div>
    </Modal>
  );
}
