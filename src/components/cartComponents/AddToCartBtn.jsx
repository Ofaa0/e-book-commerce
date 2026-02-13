import axios from "axios";
import { GrCart } from "react-icons/gr";
import { url, useAuthStore } from "../../store";

const AddToCartBtn = ({ bookId }) => {
    const {token} = useAuthStore()
  const addToCart = async () => {
    try {
      const res = await axios.post(
        url,
        `/cart/store/${bookId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "applicatin/json",
          },
        },
      );
      console.log("From add to cart ==>", res.data);
    } catch (err) {
      console.log("From add to cart ==>", err);
    }
  };
  return (
    <button
      onClick={() => {
        addToCart();
      }}
      className="cursor-pointer col-span-4 bg-purple-them rounded-lg text-white flex items-center justify-center gap-2.5 hover:scale-105 duration-300"
    >
      Add To Cart <GrCart className="text-xl" />
    </button>
  );
};

export default AddToCartBtn;
