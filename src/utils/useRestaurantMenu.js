import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(MENU_URL + resId);
    const jsonVal = await menuData.json();
    setResInfo(jsonVal.data);
    console.log(jsonVal);
  };
  return resInfo;
};

export default useRestaurantMenu;
