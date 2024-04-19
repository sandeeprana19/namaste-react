import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="restro-logo"
      />
      <h3 className="font-bold text-lg py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export const WithAggregatedDiscountInfoV3 = (RestaurantCard) => {
  return (props) => {
    const { header } = props.resData.info.aggregatedDiscountInfoV3;
    return (
      <div>
        <label>{header}</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
