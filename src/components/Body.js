import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local state variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([
    {
      info: {
        id: "21921",
        name: "KFC",
        cloudinaryImageId: "e70lglh0w4p4l0erere3",
        costForTwo: "₹350 for two",
        cuisines: ["Indian", "Chinese", "Tandoor"],
        avgRating: 3.4,
        sla: {
          deliveryTime: 36,
        },
      },
    },
    {
      info: {
        id: "21922",
        name: "Domino",
        cloudinaryImageId: "e70lglh0w4p4l0erere3",
        costForTwo: "₹350 for two",
        cuisines: ["Indian", "Chinese", "Tandoor"],
        avgRating: 4.4,
        sla: {
          deliveryTime: 36,
        },
      },
    },
    {
      info: {
        id: "21923",
        name: "MCD",
        cloudinaryImageId: "e70lglh0w4p4l0erere3",
        costForTwo: "₹350 for two",
        cuisines: ["Indian", "Chinese", "Tandoor"],
        avgRating: 4.1,
        sla: {
          deliveryTime: 36,
        },
      },
    },
  ]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );

            setListOfRestaurants(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restro-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
