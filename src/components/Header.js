import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {}, [btnName]);
  const onlineStatus = useOnlineStatus();

  //Subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  //useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <div className="logoContainer">
        <img className="w-48" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex items-end">
          <li className="p-4 m-4">
            Online Status: {onlineStatus ? "🧶" : "🎈"}
          </li>
          <li className="p-4 m-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li className="p-4 m-4">Cart:({cartItems.length} items)</li>
          <button
            className="p-4 m-4 bg-gray-50 rounded-lg"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="p-4 m-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
