const RestaurantCard = (props) => {
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo } =
    props?.resData;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo / 100} Rupees </h4>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

export default RestaurantCard;
