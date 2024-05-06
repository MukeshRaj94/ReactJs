import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resLis from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
    console.log("use effect");
  }, []);
  console.log("render before", listOfRestaurants);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const dataJson = await data.json();
    console.log(dataJson);
    setListOfRestaurants(
      dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestaurant(
      dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Oops Internet Connection Gone!!!</h1>;

  //Conditional Rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter-res m-4 p-4">
        <input
          type="text"
          className="border border-solid border-black"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="m-4 px-4 bg-green-200 rounded-lg"
          onClick={() => {
            const filterRestaurant1 = filterRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
            );
            setListOfRestaurants(filterRestaurant1);
          }}
        >
          Search
        </button>
        <button
          className="px-4 bg-green-400 rounded-lg"
          onClick={() => {
            console.log("Button Clicked");
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <input
          type="text"
          className="mx-4 px-4 border bg-black text-white"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap rounded-lg">
        {listOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating >= 4.3 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
