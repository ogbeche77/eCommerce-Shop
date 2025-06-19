import { fireEvent, render, screen } from "@testing-library/react";
import ArticleCard from "./ArticleCard";

describe("ArticleCard", () => {
  const article = {
    name: "Sofa",
    variantName: "Modern",
    prices: { currency: "EUR", regular: { value: 20000 } },
    images: [{ path: "sofa.jpg" }],
  };

  it("renders article info and add to cart button", () => {
    const onAddToCart = jest.fn();
    render(<ArticleCard article={article} onAddToCart={onAddToCart} />);
    expect(screen.getByText(/sofa/i)).toBeInTheDocument();
    expect(screen.getByText(/add to cart/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/add to cart/i));
    expect(onAddToCart).toHaveBeenCalled();
  });
});
