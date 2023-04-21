import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../Shimmer";
import Filter from "../../utils/Filter";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurantList, setFilteredRestaurantList] = useState([]);

  const [searchText, setSearchText] = useState([]);

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
      setFilteredRestaurantList(jsonData?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  };

  return restaurantList.length > 0 ? (
    <div className="body-container">
      <div className="search-container">
        <input
          className="search-textbox"
          type="text"
          placeholder="Search Restaurant"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button
          type="button"
          onClick={() => {
            const filterData = Filter(searchText, restaurantList);
            setFilteredRestaurantList(filterData);
          }}
          className="search-button"
        >
          Search
        </button>
      </div>
      <br />
      {filterRestaurantList.length > 0 && (
        <div className="restaurant-container">
          {filterRestaurantList.map((restaurant) => {
            return (
              <RestaurantCard
                resData={restaurant.data}
                key={restaurant.data.id}
              />
            );
          })}
        </div>
      )}
      {filterRestaurantList.length === 0 && (
        <div>No Restaurants matches your search !!!!</div>
      )}
    </div>
  ) : (
    <Shimmer />
  );
};
export default Body;
