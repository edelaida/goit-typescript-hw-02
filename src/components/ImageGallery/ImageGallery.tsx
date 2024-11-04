import ImageCard from "../ImageCard/ImageCard";
import React, {FC, MouseEvent} from "react";
import s from "./ImageGallery.module.css";
import {Image} from '../../types'

interface ImageGalleryProps {
  pictures: Image[];  
  onImageClick: (picture: Image) => void;
};

const ImageGallery:React.FC<ImageGalleryProps> = ({ pictures, onImageClick }) => {
  return (
    <ul className={s.blokapp}>
      {pictures &&
        pictures.length > 0 &&
        pictures.map((picture) => {
          return (
            <ImageCard
              key={picture.id}
              picture={picture}
              onClick={() => onImageClick(picture)}
            />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
