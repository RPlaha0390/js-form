export const formatPriceToBritishPound = (price: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
  }).format(price);
