import LeftPartCheckoutPage from "../components/checkoutComponents/LeftPartCheckoutPage";
import RightPartCheckoutPage from "../components/checkoutComponents/RightPartCheckoutPage";

const CheckInfoConfirm = () => {
  return (
    <div className="bg-white-bg w-full min-h-dvh text-base-strong-text pt-15 pb-50.5">
      <div className="container w-full">
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <RightPartCheckoutPage />
          </div>
          <div className="col-end-4">
            <LeftPartCheckoutPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckInfoConfirm;
