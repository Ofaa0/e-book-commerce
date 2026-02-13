import { Form, Formik } from "formik";
import InputField from "../loginComponents/InputField";
import { LuTicket } from "react-icons/lu";
import CheckOutBox from "./CheckOutBox";

const PaymentSec = ({cartData}) => {
  return (
    <div className="w-full py-10 px-28 flex justify-center items-center bg-[#3B2F4A1A] mt-15">
      <div className="container w-full">
        <div className="w-full flex justify-between items-start">
          <div className="flex flex-col gap-20 ">
            <div>
              <h1 className="text-[26px] font-bold text-base-strong-text pb-4">
                Payment Summary
              </h1>
              <p className="text-base-text w-129">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>
            </div>
            <div>
              <Formik>
                <Form className="flex items-end gap-4">
                  <div className="relative h-fit col-span-4">
                    <InputField
                      label={"Have a discount code?"}
                      placeHolder={"Enter Promo Code"}
                      name={"promoCode"}
                      type={"text"}
                      labelStyle={
                        "text-[18px]! text-base-text! font-normal! col-span-4!"
                      }
                      inpStyle={"mt-6! pl-10!  bg-[#22222233]!"}
                    />
                    <LuTicket className="rotate-90 absolute top-19 left-4 -translate-y-1/2 text-base-text" />
                  </div>
                  <button className="btn btn-neutral bg-[#3B2F4A] text-white py-6.5 px-7">
                    Apply
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
          <CheckOutBox cartData={cartData} />
        </div>
      </div>
    </div>
  );
};

export default PaymentSec;
