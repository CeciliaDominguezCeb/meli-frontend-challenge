import Image from "next/image";


import classes from "./image-item.module.css";

export default function ImageItem({
  url,
  sizes,
  alt,
  style,
  priority = true,
}: any) {
  return (
    <div className={classes.carImageWrapper}>
      {url && (
        <Image
          src={url}
          alt={alt || "Card Image"}
          fill
          quality={100}
          style={{ ...style, objectFit: "contain" }}
          priority={priority}
          sizes={sizes}
        ></Image>
      )}
    </div>
  );
}