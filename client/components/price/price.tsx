import { Sizes } from "../../interfaces/sizes";
import { currencies, formatCurrency } from "../../utils/format-currency";

import classes from "./price.module.css";

interface PriceProps {
  price: number;
  currency: currencies;
  size?: Sizes;
  decimal?: number;
}

export default function Price({
  price,
  decimal,
  currency,
  size = Sizes.medium,
}: Readonly<PriceProps>) {
  const priceFormatted = formatCurrency(currency, price);
  return (
    <p className={`${classes.price} ${classes[`price--${size}`]}`}>
    {priceFormatted}
    {decimal !== 0 && decimal && (
      <span className={`${classes.decimal} ${classes[`decimal--${size}`]}`}>
        {decimal}
      </span>
    )}
</p>

  );
}