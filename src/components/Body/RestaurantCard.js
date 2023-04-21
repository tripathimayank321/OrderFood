import { IMG_CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo } =
    props?.resData;
  return (
    <div className="restaurant-card">
      <img className="restaurant-logo" src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo / 100} Rupees </h4>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

export default RestaurantCard;
