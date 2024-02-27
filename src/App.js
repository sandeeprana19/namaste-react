import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";

/**
 * Header
 * - Logo
 * - NavItems
 * Body
 * - Search
 * - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of restro, Star rating, cuisine, delivery time, etc.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
