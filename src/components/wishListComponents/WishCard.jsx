import { FaRegTrashAlt } from "react-icons/fa";
import DeleteFromWishlistBtn from "./DeleteFromWishlistBtn";

const WishCard = ({ book }) => {
  return (
    <div className="w-full bg-white grid grid-cols-7 mt-10">
      <div className="col-span-3 flex items-start gap-6 p-6">
        <img src="/public/1.png" alt="book image" className="h-[253px] grow" />
        <div>
          <div>
            <h1 className="font-bold text-[18px] mb-1">
              {book?.book?.bookName}
            </h1>
            <p className="mb-2">
              Author:{" "}
              <span className="font-semibold">{book?.book?.author}</span>
            </p>
          </div>
          <p className="mb-8.75">{book?.book?.description}</p>
          <div className="flex items-center mb-8 gap-2 border rounded-lg bg-white py-2 px-3 text-base-text w-fit">
            <img
              src="/public/shipping-fast.png"
              alt="shipping-fast"
              className="w-4"
            />
            <p>Free Shipping</p>
          </div>
          <p>
            ASIN: <span>{book?.book?.asinCode}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 ">
        <button className="btn btn-secondary pb-1 rounded-full bg-white text-purple-them text-2xl p-0 h-5 w-5 flex justify-center items-center">
          -
        </button>
        <p className="text-[30px] font-semibold">1</p>
        <button className="btn btn-secondary rounded-full bg-white text-purple-them text-2xl p-0 h-5 w-5 flex justify-center items-center">
          +
        </button>
      </div>
      <p className="flex items-center justify-center text-2xl text-base-strong-text font-semibold">
        ${book?.book?.final_price}
      </p>
      <p className="flex items-center justify-center text-2xl text-base-strong-text font-semibold">
        ${book?.book?.final_price * book?.quantity}
      </p>
      <DeleteFromWishlistBtn bookId={book?.book?.bookId} />
    </div>
  );
};

export default WishCard;
