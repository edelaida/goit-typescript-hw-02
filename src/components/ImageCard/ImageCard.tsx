import React, {FC} from "react";
import s from "../ImageGallery/ImageGallery.module.css";

interface Image {
  id: number;
  picture: string;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
}
interface ImageCardProps {
  picture: Image[];
  onClick: any;
}

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
