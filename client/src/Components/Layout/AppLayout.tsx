import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Category } from "../../types";
import CartButton from "../CartButton/CartButton";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import {
  Header,
  ItemImage,
  MainHeader,
  SearchInput,
} from "../ProductList/ProductList.styles";
import homeimage from "./homeimage.png";

const AppHeader: React.FC<{
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  cartCount: number;
  categories: Category[];
}> = ({ searchTerm, setSearchTerm, cartCount, categories }) => {
  const location = useLocation();
  const showSearchAndHamburger = location.pathname !== "/checkout";
  return (
    <Header>
      {showSearchAndHamburger && <HamburgerMenu categories={categories} />}
      <Link to="/" style={{ textDecoration: "none" }}>
        <ItemImage src={homeimage} alt="" />
      </Link>
      <MainHeader
        style={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        {showSearchAndHamburger && (
          <SearchInput
            placeholder={"Suchen "}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ minWidth: 220 }}
          />
        )}
        <CartButton count={cartCount} />
      </MainHeader>
    </Header>
  );
};

const AppLayout: React.FC = () => {
  const [cartItems, setCartItems] = useState<
    { article: any; quantity: number }[]
  >(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);

  const addToCart = (article: any) => {
    setCartItems((items) => {
      const idx = items.findIndex(
        (i) =>
          i.article.name === article.name &&
          i.article.variantName === article.variantName
      );
      if (idx > -1) {
        return items.map((item, i) =>
          i === idx ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...items, { article, quantity: 1 }];
    });
  };

  const removeFromCart = (article: any) => {
    setCartItems((items) =>
      items.filter(
        (i) =>
          !(
            i.article.name === article.name &&
            i.article.variantName === article.variantName
          )
      )
    );
  };

  const incrementCart = (article: any) => {
    setCartItems((items) =>
      items.map((item) =>
        item.article.name === article.name &&
        item.article.variantName === article.variantName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementCart = (article: any) => {
    setCartItems((items) =>
      items.map((item) =>
        item.article.name === article.name &&
        item.article.variantName === article.variantName &&
        item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <>
      <AppHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartCount={cartCount}
        categories={categories}
      />
      <Outlet
        context={{
          cartItems,
          addToCart,
          removeFromCart,
          incrementCart,
          decrementCart,
          searchTerm,
          setSearchTerm,
          categories,
          setCategories,
        }}
      />
    </>
  );
};

export default AppLayout;
