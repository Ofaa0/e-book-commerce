import { useEffect, useState } from "react";
import CartCard from "../components/cartComponents/CartCard";
import { url, useAuthStore, useCart } from "../store";
import axios from "axios";
import PaymentSec from "../components/cartComponents/PaymentSec";

const CartPage = () => {
  const { token } = useAuthStore();
  const [cart, setCart] = useState([]);
  const { setCartLength } = useCart();
  const [cartData, setCartData] = useState([]);

  const getCart = async () => {
    try {
      const res = await axios.get(url + "/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      console.log("cartPage ==>", res.data);
      console.log("cartPageBook ==>", res?.data?.data?.cart[0]?.bookDetails);
      setCart(res?.data?.data?.cart || []);
      setCartData(res?.data?.data || []);
      setCartLength(cart?.length || 0);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCart();
  }, []);
  useEffect(() => {
    setCartLength(cart?.length || 0);
  }, [cart, length]);

  return (
    <div className="text-base-strong-text bg-white-bg w-full min-h-dvh flex justify-center items-start pt-15 pb-136.75">
      <div className="container w-full h-full">
        <div className="w-full grid grid-cols-7 pl-20 font-semibold text-[20px] capitalize">
          <div className="col-span-3 flex">
            <h1>item</h1>
          </div>
          <div>
            <h1>Quantity</h1>
          </div>
          <div>
            <h1>Price</h1>
          </div>
          <div>
            <h1>Total Price</h1>
          </div>
        </div>
        <div className="w-full flex flex-col">
          {cart.map((el) => (
            <CartCard
              key={el?.cartId}
              cart={el}
              book={el?.bookDetails}
              refreshCart={getCart}
            />
          ))}
        </div>

        <PaymentSec cartData={cartData} />
      </div>
    </div>
  );
};

export default CartPage;
