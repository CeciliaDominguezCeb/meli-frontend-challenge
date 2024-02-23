

import ImageItem from "../image-item/image-item";
import classes from "./card-image.module.css";

interface CardImage {
  image?: {
    url?: string;
    alt?: string;
    priority?: boolean;
    sizes?: string;
    style?: React.CSSProperties;
  };
}

export default function CardImage({ image }: Readonly<CardImage>) {
  const imageDefaultStyle: React.CSSProperties = { borderRadius: "4px" };

  return (
    <div className={classes.cardImage}>
      {image && (
        <ImageItem
          url={image.url}
          alt={image.alt}
          priority={image.priority}
          sizes={image.sizes}
          style={{ ...imageDefaultStyle, ...image.style }}
          
        ></ImageItem>
      )}
    </div>
  );
}