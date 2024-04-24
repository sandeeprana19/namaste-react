import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto bg-gray-50 p-4 my-4 shadow-lg">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
