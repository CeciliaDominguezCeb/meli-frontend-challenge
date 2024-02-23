
import style from "styled-jsx/style";
import Image from "next/image";
import Link from "next/link";
import { Item } from "../../interfaces/items";
import classes from "./card.module.css";
import CardImage from "../card-image/card-image";
import Price from "../price/price";
import FreeShipping from "../free-shipping/free-shipping";

interface ItemsProps {
  items: Item[];
}

export default function Card({ items }: ItemsProps) {
  const cardImgSizes = "110px";
  const style = classes.cardItem
    return (
      <div className={classes.cardWrapper} >

       <ul>
        {
            items.map((item:Item) => (
                <li key={item.id} className={classes.row}>
                    <Link href={`/items/${item.id}`}>
                      <div className={`${classes.card} ${style}`}><CardImage
                  image={{
                    url: item.picture,
                    sizes: cardImgSizes,
                    alt: `Image for ${item.title}`,
                  }}
                ></CardImage>
                <div className={classes.cardTitle}>
                    <div className={classes.cardSubtitle} >
                    {item.price && (
                      <Price
                      price={item.price.amount}
                      currency={item.price.currency}
                    ></Price>
                    
                    )}
                     {item.free_shipping && <FreeShipping />}
                  </div>
                  <h2 className={classes.cardHeading}>{item.title}</h2>
                </div></div>
                    
                </Link>
            </li>
            ))
        }
       </ul>
      </div>
                    
    )
}