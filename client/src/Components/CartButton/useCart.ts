import { useState } from "react";

export function useCart() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => setCartCount((c) => c + 1);
  const resetCart = () => setCartCount(0);

  return { cartCount, addToCart, resetCart };
}
