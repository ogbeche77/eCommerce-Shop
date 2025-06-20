import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CheckoutPage from "./CheckoutPage";

jest.mock("react-router-dom");
const routerMocks = require("react-router-dom").__mocks__;

beforeEach(() => {
  routerMocks.mockIncrementCart.mockReset();
  routerMocks.mockDecrementCart.mockReset();
  routerMocks.mockRemoveFromCart.mockReset();
});

describe("CheckoutPage", () => {
  it("renders cart items and total, and handles increment/decrement/remove", () => {
    render(
      <MemoryRouter>
        <CheckoutPage />
      </MemoryRouter>
    );
    expect(screen.getByText(/test product/i)).toBeInTheDocument();
    expect(screen.getByText(/gesamtsumme/i)).toBeInTheDocument();

    screen.getByLabelText(/erhöhen/i).click();
    expect(routerMocks.mockIncrementCart).toHaveBeenCalled();

    screen.getByLabelText(/verringern/i).click();
    expect(routerMocks.mockDecrementCart).toHaveBeenCalled();

    screen.getByLabelText(/entfernen/i).click();
    expect(routerMocks.mockRemoveFromCart).toHaveBeenCalled();
  });

  it("renders empty cart message", async () => {
    jest.resetModules();
    jest.doMock("react-router-dom", () => {
      const actual = jest.requireActual("react-router-dom");
      return {
        ...actual,
        useOutletContext: () => ({
          cartItems: [],
          incrementCart: jest.fn(),
          decrementCart: jest.fn(),
          removeFromCart: jest.fn(),
        }),
      };
    });

    const { default: CheckoutPageWithEmptyCart } = await import("./CheckoutPage");
    render(<CheckoutPageWithEmptyCart />);
    expect(screen.getByText(/dein warenkorb ist leer/i)).toBeInTheDocument();
  });
});
