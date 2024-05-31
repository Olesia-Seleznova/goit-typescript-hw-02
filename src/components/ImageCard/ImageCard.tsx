import React from "react";

interface Item {
  alt_description: string;
  urls: { small: string; regular: string };
}

interface ImageCardProps {
  item: Item;
  onClick: (url: string, alt: string) => void;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  item: {
    alt_description: alt,
    urls: { small, regular },
  },
  onClick,
}) => {
  return (
    <div>
      <img
        src={small}
        alt={alt}
        onClick={() => {
          onClick(regular, alt);
        }}
      />
    </div>
  );
};

export default ImageCard;
