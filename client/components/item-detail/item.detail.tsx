

import { Item } from "../../interfaces/items";
import { Sizes } from "../../interfaces/sizes";
import CardImage from "../card-image/card-image";

import Price from "../price/price";
import classes from "./item-detail.module.css";

interface ItemDetailProps {
  item: Item;
}

export default function ItemDetail({ item }: Readonly<ItemDetailProps>) {
    
    const cardImgSizes = "(max-width: 768px) 300px, 500px";
    return (
    <div className={classes.cardWrapper}>
        <div className={`${classes.card} ${classes.cardDetail} `} >
        <CardImage
            image={{
            url: item.picture,
            priority: true,
            sizes: cardImgSizes,
            }}
        ></CardImage>
        <div>
            <p className={classes.cardSubtitle}>
            <span>
              {
                item.condition === "new" ? "Nuevo" : "Usado"
              }
            </span>
            {item.sold_quantity && <span> - {item.sold_quantity}</span>}
            </p>
            <h2 className={classes.cardHeading}>{item.title}</h2>
            {item.price && (
                <Price
                    price={item.price.amount}
                    decimal={item.price.decimals}
                    currency={item.price.currency}
                    size={Sizes.large}
            ></Price>
            )}
        </div>
        <div className={classes.cardBody}>
            <h3 className={classes.cardBodyTitle}>Descripción del producto</h3>
            <p className={classes.cardBodyP}>{item.description}</p>
        </div>
        <div className={classes.cardActions}>
      <button className={classes.cardButton}>Comprar</button>
    </div>
     
        </div>
    </div>
    );
}