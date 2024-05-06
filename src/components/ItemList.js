import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((i) => (
        <div
          key={i.card.info.id}
          className="p-2 m-2  border-gray-100 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="flex justify-between">
              <span className="font-bold">{i.card.info.name}</span>
              <span>
                ₹ {i.card.info.price / 100 || i.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{i.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="shadow-lg m-auto bg-black text-white"
                onClick={() => addToCart(i)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + i.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
