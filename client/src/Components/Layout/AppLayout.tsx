import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Category } from "../../types";
import CartButton from "../CartButton/CartButton";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Brand, Header, SearchInput } from "../ProductList/ProductList.styles";

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
        <Brand as="span" style={{ cursor: "pointer", color: "#222" }}>
          home24
        </Brand>
      </Link>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        {showSearchAndHamburger && (
          <SearchInput
            placeholder={"Suchen Sie nach Artikeln..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ minWidth: 220 }}
          />
        )}
        <CartButton count={cartCount} />
      </div>
    </Header>
  );
};

const AppLayout: React.FC = () => {
  const [cartCount, setCartCount] = useState(() => {
    const stored = localStorage.getItem("cartCount");
    return stored ? parseInt(stored, 10) : 0;
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);

  const addToCart = () => setCartCount((c) => c + 1);

  useEffect(() => {
    localStorage.setItem("cartCount", String(cartCount));
  }, [cartCount]);

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
          cartCount,
          addToCart,
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
