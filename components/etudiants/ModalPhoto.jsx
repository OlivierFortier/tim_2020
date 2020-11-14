import Modal from "react-modal";

export default function ModalPhoto() {

  return (
    <Modal
      style={{
        overlay: {
          zIndex: 10,
        },
      }}
      isOpen="true"
    >
      <h1 style={{ color: "black" }}>femme</h1>
    </Modal>
  );
}
