import { Link } from "react-router-dom";

const CheckOutBox = ({cartData}) => {
  return (
    <div className="w-106 bg-transparent">
      <div className="w-full border-b ">
        <div className="w-full flex justify-between items-center pb-6">
          <h1>Subtotal</h1>
          <p className="font-semibold text-base-strong-text text-[24px]">
            ${cartData.subTotal}
          </p>
        </div>
        <div className="w-full flex justify-between items-center pb-6">
          <h1>Shipping</h1>
          <p className="font-semibold text-base-strong-text text-[24px]">
            Free Delivery
          </p>
        </div>
        <div className="w-full flex justify-between items-center pb-6">
          <h1>Tax</h1>
          <p className="font-semibold text-base-strong-text text-[24px]">${cartData.tax}</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center pt-6">
        <h1>Total</h1>
        <p className="font-bold text-purple-them text-[26px] ">${cartData.total}</p>
      </div>
      <div className="flex flex-col mt-10 gap-3">
        <Link to={"/checkInfo"} className="btn btn-secondary rounded-lg py-3!">
          Check out
        </Link>
        <Link to={"/books"} className="btn btn-secondary rounded-lg bg-transparent text-purple-them py-3!">
          Keep Shopping
        </Link>
      </div>
    </div>
  );
};

export default CheckOutBox;
