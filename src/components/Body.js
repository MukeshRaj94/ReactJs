import RestaurantCard from "./RestaurantCard";
import resLis from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [searchTxt, setSearchTxt] = useState("");
  useEffect(() => {
    fetchData();
    console.log("use effect");
  }, []);
  console.log("render before");

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
      <div className="filter-res">
        <input
          type="text"
          className="search-box"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
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
          className="top-rated-btn"
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
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
