import { IoIosStar } from "react-icons/io";
import { useLocation } from "react-router-dom";

const StarsRate = () => {
  const { pathname } = useLocation();
  const isSingleBookPage = pathname.includes("/books/");
  return (
    <div id="third-line">
      <div
        className={`flex justify-between ${isSingleBookPage ? "items-start" : "items-center"}`}
      >
        <div className="flex flex-col gap-2">
          <div className=" flex items-center gap-1 text-[24px]">
            <IoIosStar className="text-[#EBC305]" />
            <IoIosStar className="text-[#EBC305]" />
            <IoIosStar className="text-[#EBC305]" />
            <IoIosStar className="text-[#EBC305]" />
            <IoIosStar className="text-base-text" />
            <p className="text-base-text text-[16px] font-semibold">
              ({"123"} Reviews)
            </p>
          </div>
          <p className="text-base-text">
            Rate:{" "}
            <span className="text-base-strong-text font-semibold">4.2</span>
          </p>
        </div>
        {isSingleBookPage ? (
          <div className="flex flex-col gap-3 items-end">
            <div className="flex gap-3">
              <div className="flex items-center gap-2 border rounded-lg bg-white py-2 px-3 text-[#25D994]">
                <img src="../../public/check.png" alt="check" />
                <p>In Stock</p>
              </div>
              <div className="flex items-center gap-2 border rounded-lg bg-white py-2 px-3 text-base-text">
                <img src="../../public/shipping-fast.png" alt="shipping-fast" className="w-4" />
                <p>Free Shipping Today</p>
              </div>
            </div>
            <div className=" border rounded-lg bg-white py-2 px-3 text-[#EAA451] w-fit">
              Discount code: Ne212
            </div>
          </div>
        ) : (
          <div className="font-bold text-base-strong-text text-2xl">
            ${"52.3"}
          </div>
        )}
      </div>
    </div>
  );
};

export default StarsRate;
