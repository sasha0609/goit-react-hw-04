import Modal from "react-modal";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default function ImageModal({
  modalOpen,
  modalClose,
  afterOpen,
  images,
}) {
  if (!images || !images.urls) {
    return null;
  }
  const { regular } = images.urls;
  const { alt_description } = images;
  return (
    <Modal
      isOpen={modalOpen}
      onAfterOpen={afterOpen}
      onRequestClose={modalClose}
      style={customStyles}>
      <img src={regular} alt={alt_description} />
    </Modal>
  );
}
