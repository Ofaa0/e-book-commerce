import axios from "axios";
import { url, useAuthStore } from "../../store";
import { useState } from "react";
import DeleteFromCart from "./DeleteFromCart";

const CartCard = ({ cart, book }) => {
  console.log("CartCard ====>=>>", book);
  const { token } = useAuthStore();
  const [qty, setQty] = useState(cart?.qty || 1);
  const editQty = async (qty) => {
    try {
      const res = await axios.put(
        url + `/cart/update/${book?.bookId}`,
        {
          qty: qty,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        },
      );
      console.log("from update ==>", res.data);
    } catch (err) {
      console.log("from update ==>", err);
    }
  };

  return (
    <div className="w-full bg-white grid grid-cols-7 mt-10">
      <div className="col-span-3 flex items-start gap-6 p-6">
        <img src="/public/1.png" alt="book image" className="h-[253px] grow" />
        <div>
          <div>
            <h1 className="font-bold text-[18px] mb-1">{book?.bookName}</h1>
            <p className="mb-2">
              Author: <span className="font-semibold">{book?.author}</span>
            </p>
          </div>
          <p className="mb-8.75">{book?.description}</p>
          <div className="flex items-center mb-8 gap-2 border rounded-lg bg-white py-2 px-3 text-base-text w-fit">
            <img
              src="/public/shipping-fast.png"
              alt="shipping-fast"
              className="w-4"
            />
            <p>Free Shipping</p>
          </div>
          <p>
            ASIN: <span>{book?.asinCode}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 ">
        <button
          onClick={() => {
            if (qty > 1) {
              const newQty = qty - 1;
              setQty(newQty);
              editQty(newQty);
            }
          }}
          className="btn btn-secondary pb-1 rounded-full bg-white text-purple-them text-2xl p-0 h-5 w-5 flex justify-center items-center"
        >
          -
        </button>
        <p className="text-[30px] font-semibold">{qty}</p>
        <button
          onClick={() => {
            const newQty = qty + 1;
            setQty(newQty);
            editQty(newQty);
          }}
          className="btn btn-secondary rounded-full bg-white text-purple-them text-2xl p-0 h-5 w-5 flex justify-center items-center"
        >
          +
        </button>
      </div>
      <p className="flex items-center justify-center text-2xl text-base-strong-text font-semibold">
        ${book?.final_price}
      </p>
      <p className="flex items-center justify-center text-2xl text-base-strong-text font-semibold">
        ${cart?.price * cart?.qty}
      </p>
      <DeleteFromCart bookId={book?.bookId} />
    </div>
  );
};

export default CartCard;
