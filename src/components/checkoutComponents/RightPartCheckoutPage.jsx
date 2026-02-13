import LowerPartRightCheckout from "./LowerPartRightCheckout";
import MiddlePartRightCheckout from "./MiddlePartRightCheckout";
import UpperPartRightCheckout from "./UpperPartRightCheckout";

const RightPartCheckoutPage = () => {
  return (
    <div className="rounded-[20px] bg-white">
      <UpperPartRightCheckout />
      <MiddlePartRightCheckout />
      <LowerPartRightCheckout />
    </div>
  );
};

export default RightPartCheckoutPage;
