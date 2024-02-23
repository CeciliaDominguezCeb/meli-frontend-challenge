export enum currencies {
  ARS = "ARS",
}

export const formatCurrency = (currency: currencies, value: number) => {
  if (currency === currencies.ARS) {
    return new Intl.NumberFormat("es-ar", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(value);
  }

  return value;
};
