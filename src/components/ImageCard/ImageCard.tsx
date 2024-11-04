import React, {FC} from "react";
import s from "../ImageGallery/ImageGallery.module.css";
import { Image } from '../../types'


interface ImageCardProps {
  picture: Image;
  onClick: () => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ picture, onClick }) => {
   
  return (
    <li key={picture.id}>
      <img
        onClick={onClick}
        className={s.card}
        src={picture.urls.small}
        alt={picture.alt_description}
      />
    </li>
  );
};

export default ImageCard;
