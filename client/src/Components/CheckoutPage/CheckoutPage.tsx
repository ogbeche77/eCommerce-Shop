import React from "react";
import { useOutletContext } from "react-router-dom";
import { Article } from "../../types";
import { formatter } from "../../Util/formatter";
import {
  CartItem,
  CartList,
  EmptyCart,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  PayButton,
  QtyBtn,
  QuantityControls,
  RemoveBtn,
  Summary,
  TotalLabel,
  TotalValue,
} from "./CheckoutPage.styles";

interface CartItemType {
  article: Article;
  quantity: number;
}

interface CheckoutContext {
  cartItems: CartItemType[];
  incrementCart: (article: Article) => void;
  decrementCart: (article: Article) => void;
  removeFromCart: (article: Article) => void;
}

const CheckoutPage: React.FC = () => {
  const { cartItems, incrementCart, decrementCart, removeFromCart } =
    useOutletContext<CheckoutContext>();

  if (!cartItems || cartItems.length === 0) {
    return <EmptyCart>Ihr Warenkorb ist leer.</EmptyCart>;
  }

  const totalPrice = cartItems.reduce(
    (sum, { article, quantity }) =>
      sum + article.prices.regular.value * quantity,
    0
  );

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "2.5rem 0" }}>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "1.5rem",
          color: "#222",
        }}
      >
        Checkout Page (Warenkorb)
      </h1>
      <CartList>
        {cartItems.map(({ article, quantity }) => (
          <CartItem key={article.name + article.variantName}>
            <ItemImage src={article.images[0]?.path} alt={article.name} />
            <ItemInfo>
              <ItemName>{article.name}</ItemName>
              <ItemPrice>
                {formatter.format(article.prices.regular.value / 100)}
              </ItemPrice>
            </ItemInfo>
            <QuantityControls>
              <QtyBtn
                onClick={() => decrementCart(article)}
                disabled={quantity === 1}
              >
                -
              </QtyBtn>
              <span style={{ fontWeight: 500, fontSize: "1.1rem" }}>
                {quantity}
              </span>
              <QtyBtn onClick={() => incrementCart(article)}>+</QtyBtn>
            </QuantityControls>
            <RemoveBtn onClick={() => removeFromCart(article)}>
              Entfernen
            </RemoveBtn>
          </CartItem>
        ))}
      </CartList>

      <Summary>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TotalLabel>Gesamtsumme:</TotalLabel>
          <TotalValue>{formatter.format(totalPrice / 100)}</TotalValue>
        </div>
        <PayButton onClick={() => alert("Please provide credit card details")}>
          Zur Kasse
        </PayButton>
      </Summary>
    </div>
  );
};

export default CheckoutPage;
