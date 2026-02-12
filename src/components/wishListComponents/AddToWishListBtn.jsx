import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { url, useAuthStore } from "../../store";
import toast from "react-hot-toast";

const AddToWishListBtn = ({ bookId }) => {
  const { token } = useAuthStore();
  const addToWishList = async () => {
    try {
      const res = await axios.post(
        url + `/wishlist/store/${bookId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        },
      );
      // console.log(res.data);
      toast.success(res?.data?.message)
    } catch (err) {
      // console.log(err);
    }
  };
  return (
    <button onClick={()=>{addToWishList()}} className="cursor-pointer rounded-lg border border-purple-them p-3 flex justify-center items-center hover:scale-105 duration-300">
      <CiHeart className="text-purple-them text-2xl " />
    </button>
  );
};

export default AddToWishListBtn;
