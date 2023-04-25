import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { IMG_CDN_URL } from "../../utils/constants";
import Shimmer from "../Shimmer";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [restaurantMenuList, setRestaurantMenuList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getRestaurantMenuData();
  }, []);

  const getRestaurantMenuData = async () => {
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.611665&lng=76.97867800000002&restaurantId=${restaurantId}&submitAction=ENTER`
      );
      const jsonData = await res.json();
      setRestaurantMenuList(
        jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards
      );
    } catch (error) {
      console.log(error);
    }
  };

  const restuarantItemCardListObj = restaurantMenuList.filter((a) => {
    return a.card.card.itemCards;
  });
  const RestuarantsInfoList = restuarantItemCardListObj.map((a) => {
    return a.card.card.itemCards.map((inItemCards) => {
      return inItemCards.card.info;
    });
  });

  console.log("RestaurantsInfoList", RestuarantsInfoList[0]);

  return !restaurantMenuList ? (
    <Shimmer />
  ) : (
    <div>
      {RestuarantsInfoList[0] &&
        RestuarantsInfoList[0]?.map((a) => (
          <div key={a.id} className="res-menu-list">
            <h2 style={{ marginTop: "20px" }}>{a.name}</h2>
            <h5>Price:{a?.defaultPrice / 100 || a.price / 100}</h5>
            <img
              src={IMG_CDN_URL + a?.imageId}
              width="200px"
              height="200px"
            ></img>
            <br />
          </div>
        ))}
    </div>
  );
};

export default RestaurantMenu;
