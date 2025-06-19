const actual = jest.requireActual("react-router-dom");

const mockIncrementCart = jest.fn();
const mockDecrementCart = jest.fn();
const mockRemoveFromCart = jest.fn();

const cartItems = [
  {
    article: {
      name: "Test Product",
      variantName: "Variant",
      prices: { currency: "EUR", regular: { value: 1000 } },
      images: [{ path: "test.jpg" }],
    },
    quantity: 2,
  },
];

module.exports = {
  ...actual,
  useOutletContext: () => ({
    cartItems,
    incrementCart: mockIncrementCart,
    decrementCart: mockDecrementCart,
    removeFromCart: mockRemoveFromCart,
  }),
  __mocks__: {
    mockIncrementCart,
    mockDecrementCart,
    mockRemoveFromCart,
  },
};
