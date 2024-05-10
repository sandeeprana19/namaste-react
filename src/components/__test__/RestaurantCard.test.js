import { render, screen } from "@testing-library/react";
import RestaurantCard, { WithDiscount } from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard Component with prop data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard Component with offer label", () => {
  const RestaurantCardWithDiscount = WithDiscount(RestaurantCard);

  render(<RestaurantCardWithDiscount resData={MOCK_DATA} />);

  const offer = screen.getByText(/OFF/);

  expect(offer).toBeInTheDocument();
});
