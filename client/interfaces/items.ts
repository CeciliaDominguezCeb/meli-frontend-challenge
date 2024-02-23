import { currencies } from "../utils/format-currency";

export interface Items {
  categories: string[];
  items: Item[];
}
export interface ItemDetail {
  categories: string[];
  item: Item;
}
export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
}

interface Price {
  currency: currencies;
  amount: number;
  decimals: number;
}
