import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import {Picture} from '../../types'

interface Image {
  id: number;
  picture: string;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface ImageGalleryProps{
  pictures: Image[];
  onImageClick:any;  
}

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
