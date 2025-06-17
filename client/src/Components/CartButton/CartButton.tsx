import React from "react";
import { useNavigate } from "react-router-dom";
import { CartButtonWrapper, CartCount, CartIcon } from "./CartButton.styles";

interface CartButtonProps {
  count: number;
}

const CartButton: React.FC<CartButtonProps> = ({ count }) => {
  const navigate = useNavigate();
  return (
    <CartButtonWrapper
      onClick={() => navigate("/checkout")}
      aria-label="Zum Warenkorb / Checkout gehen"
    >
      <CartIcon>🛒</CartIcon>
      Warenkorb
      <CartCount>{count}</CartCount>
    </CartButtonWrapper>
  );
};

export default CartButton;
