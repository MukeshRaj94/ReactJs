import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItm = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    console.log("cliked clear cart");
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4 font-bold text-center text-lg">
      <div className="">Cart</div>
      <button
        className="m-2 p-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItm} />
      </div>
    </div>
  );
};

export default Cart;
