export const formatPrice = (price) => {
  const newNumber = Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(price / 100);
  return newNumber;
};
