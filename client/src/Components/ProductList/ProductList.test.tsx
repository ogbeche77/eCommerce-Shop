import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";

jest.mock("react-router-dom");
const routerMocks = require("react-router-dom").__mocks__;

beforeEach(() => {
  routerMocks.routerMocks.mockAddToCart?.mockReset?.();
  routerMocks.routerMocks.mockSetSearchTerm?.mockReset?.();
  routerMocks.routerMocks.mockSetCategories?.mockReset?.();
});

describe("ProductList", () => {
  it("renders loading state", () => {
    render(<ProductList />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders error state", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementationOnce(() => Promise.resolve({ ok: false } as Response));
    render(<ProductList />);
    await screen.findByText(/error/i);
    expect(screen.getByText(/error/i)).toBeInTheDocument();
    (global.fetch as jest.Mock).mockRestore();
  });

  it("renders no results message", () => {
    jest.doMock("react-router-dom", () => {
      const actual = jest.requireActual("react-router-dom");
      return {
        ...actual,
        useOutletContext: () => ({
          addToCart: jest.fn(),
          searchTerm: "notfound",
          setSearchTerm: jest.fn(),
          categories: [
            {
              name: "Test Category",
              articleCount: 0,
              categoryArticles: { articles: [] },
            },
          ],
          setCategories: jest.fn(),
        }),
      };
    });

    // Import the component *after* mocking to get updated context
    return import("./ProductList").then(({ default: ProductListWithEmpty }) => {
      render(<ProductListWithEmpty />);
      expect(
        screen.getByText(/es wurden keine artikel gefunden/i)
      ).toBeInTheDocument();
    });
  });

  it("renders product and handles add to cart", () => {
    // For this test, temporarily override the routerMocks.mockAddToCart
    routerMocks.mockAddToCart.mockImplementation(() => {});

    render(<ProductList />);
    expect(screen.getByText(/test product/i)).toBeInTheDocument();
    expect(screen.getByText(/add to cart/i)).toBeInTheDocument();

    screen.getByText(/add to cart/i).click();
    expect(routerMocks.mockAddToCart).toHaveBeenCalled();
  });
});
