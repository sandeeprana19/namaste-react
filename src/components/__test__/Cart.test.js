import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockRestaurantMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Breakfast (12)");

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(12);

  const cartItemsBeforeAdd = screen.getByText("Cart - (0 items)");

  expect(cartItemsBeforeAdd).toBeInTheDocument();

  // const addButtons = screen.getAllByRole("button", { name: "Add +" });
  // fireEvent.click(addButtons[0]);

  // expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  // fireEvent.click(addButtons[1]);
  // expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  // expect(screen.getAllByTestId("foodItems").length).toBe(14);

  // const clearCartButton = screen.getByRole("button", { name: "Clear Cart" });
  // fireEvent.click(clearCartButton);

  // expect(screen.getAllByTestId("foodItems").length).toBe(12);

  // expect(
  //   screen.getByText("Cart is empty. Add items to the cart!")
  // ).toBeInTheDocument();
});

// Homework

it("Should add 1 item to cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Breakfast (12)");
  fireEvent.click(accordionHeader);

  const addButtons = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addButtons[0]);

  const cartItemsAfterAdd = screen.getByText("Cart - (1 items)");

  expect(cartItemsAfterAdd).toBeInTheDocument();
});

it("Should add 2 item to cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Breakfast (12)");
  fireEvent.click(accordionHeader);

  const addButtons = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addButtons[1]);

  const cartItemsAfterAdd = screen.getByText("Cart - (2 items)");

  expect(cartItemsAfterAdd).toBeInTheDocument();
});

it("Should render cart component with added cart items", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const cartItems = screen.getAllByTestId("foodItems");

  expect(cartItems.length).toBe(2);
});

it("Should clear cart after clear button clicked", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const clearCartButton = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartButton);

  const emptyCartMessage = screen.getByText(
    "Cart is empty. Add items to the cart!"
  );

  expect(emptyCartMessage).toBeInTheDocument();
});
