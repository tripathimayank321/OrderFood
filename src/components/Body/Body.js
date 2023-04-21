import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.611665&lng=76.97867800000002&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await res.json();
      setRestaurantList(jsonData?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="body-container">
      <div className="search-container">
        <input
          className="search-textbox"
          type="text"
          placeholder="Search Restaurant"
        />
        <button type="button" className="search-button">
          Search
        </button>
      </div>
      <br />
      {restaurantList.length > 0 ? (
        <div className="restaurant-container">
          {restaurantList.map((restaurant) => {
            return (
              <RestaurantCard
                resData={restaurant.data}
                key={restaurant.data.id}
              />
            );
          })}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};
export default Body;
