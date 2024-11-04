import Modal from "react-modal";
import React, {FC, MouseEvent} from "react";
import s from "../ImageGallery/ImageGallery.module.css";

interface ImageModalResponse {
  modalData: string | null;
  onRequestClose: (event: MouseEvent<HTMLDivElement>) => void;
  isOpen: boolean;
}

const ImageModal:React.FC<ImageModalResponse> = ({ modalData, onRequestClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {modalData && <img className={s.bigcard} src={modalData} alt="Picture-description" />}
      {/* <img className={s.bigcard} src={modalData} alt="Picture-description" /> */}
    </Modal>
  );
};

export default ImageModal;
