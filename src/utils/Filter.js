const Filter = (searchTxt, allRestaurants) => {
  const filterValue = allRestaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
  return filterValue;
};
export default Filter;
