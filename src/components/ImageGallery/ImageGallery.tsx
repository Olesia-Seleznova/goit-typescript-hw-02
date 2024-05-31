import React from "react";
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

interface Item {
  id: string;
  alt_description: string;
  urls: { small: string; regular: string };
}

interface ImageGalleryProps {
  onImageOpen: (imgUrl: string, imgAlt: string) => void;
  items: Item[];
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ onImageOpen, items }) => {
  return (
    <ul className={css.ul}>
      {items.map((item) => (
        <li key={item.id} className={css.li}>
          <ImageCard className={css.img} item={item} onClick={onImageOpen} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
