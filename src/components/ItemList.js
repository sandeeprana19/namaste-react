import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="text-left border-b-2 border-gray-200 m-2 p-2 flex justify-between transition-all"
          >
            <div className="w-9/12 py-4">
              <div>
                <span className="font-medium">{item?.card?.info?.name}</span>
                <span>
                  - ₹{" "}
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4 relative">
              {item.card.info.imageId ? (
                <img
                  src={CDN_URL + item.card.info.imageId}
                  alt={item.card.info.name}
                  className="w-full"
                />
              ) : null}
              <button className="absolute top-4 left-1/2 -translate-x-1/2 p-2 text-xs bg-black text-white shadow-lg rounded-md">
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
