export const formatPrice = (price) => {
  const newNumber = Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(price / 100);
  return newNumber;
};

export const getShoesFromStorage = () => {
  const result = localStorage.getItem("cart");
  const cartResult = result ? JSON.parse(result) : [];
  return cartResult;
};

export const setShoesInStorage = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};
