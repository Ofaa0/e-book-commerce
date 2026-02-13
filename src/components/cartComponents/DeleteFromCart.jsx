import axios from "axios";
import { url, useAuthStore } from "../../store";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteFromCart = () => {
  const { token } = useAuthStore();

  const deleteFromWishlist = async ({bookId}) => {
    try {
      const res = await axios.post(
        url + `/cart/destroy/${bookId}`,
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

export default DeleteFromCart;
