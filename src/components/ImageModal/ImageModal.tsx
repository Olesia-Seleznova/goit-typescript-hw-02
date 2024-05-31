import React from "react";
import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  alt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  url,
  alt,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img className={css.img} src={url} alt={alt} />
    </ReactModal>
  );
};

export default ImageModal;
