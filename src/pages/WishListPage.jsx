import axios from "axios";
import WishCard from "../components/wishListComponents/wishCard";
import { url, useAuthStore, useWishList } from "../store";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const WishListPage = () => {
  const { token } = useAuthStore();
  const [wishBooks, setWishBooks] = useState([]);
  const { setWishlistLength } = useWishList();
  const moveToCart = async () => {
    try {
      const res = await axios.post(
        url,
        "/wishlist/move-to-cart",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        },
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getWishlistBooks = async () => {
    try {
      const res = await axios.get(url + "/wishlist", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      console.log("wishbooks ==>", res.data);
      setWishBooks(res?.data?.data);
    setWishlistLength(wishBooks?.length);

    } catch (err) {
      //   console.log(err);
    }
  };
  useEffect(() => {
    getWishlistBooks();
  }, []);
  useEffect(() => {
    getWishlistBooks();
  }, [wishBooks.length]);
  useEffect(() => {
    setWishlistLength(wishBooks.length);
  }, [wishBooks.length]);
  return (
    <div className="text-base-strong-text bg-white-bg w-full min-h-dvh flex justify-center items-start pt-15 pb-136.75">
      <div className="container  w-full h-full">
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
          {wishBooks.map((el) => (
            <WishCard book={el} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 mt-10.25">
          <button
            onClick={() => {
              moveToCart();
            }}
            className="py-3.5 btn btn-secondary btn-soft bg-[#D9176C1A] border border-purple-them font-bold text-[16px]"
          >
            Move to cart
          </button>
          <button className="py-3.5 btn btn-secondary flex justify-between items-center w-80">
            <span>
              {wishBooks.length} Item
              <br /> total money{" "}
            </span>
            <span className="font-bold text-[16px]">Check out</span>
            <span className="bg-white rounded-lg text-purple-them border border-purple-them w-8 h-8 flex justify-center items-center">
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListPage;
