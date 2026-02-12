import axios from "axios";
import { url, useAuthStore } from "../../store";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteFromWishlistBtn = ({ bookId }) => {
  const { token } = useAuthStore();

  const deleteFromWishlist = async () => {
    try {
      const res = await axios.post(
        url + `/wishlist/destroy/${bookId}`,
        {
          _method: "delete",
        },
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
  return (
    <span
      onClick={() => {
        deleteFromWishlist();
      }}
      className="flex items-center text-3xl font-semibold justify-center text-purple-them cursor-pointer"
    >
      <FaRegTrashAlt />
    </span>
  );
};

export default DeleteFromWishlistBtn;
