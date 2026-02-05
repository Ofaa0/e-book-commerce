import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const CollapseTool = ({ data, titleHeading }) => {
  const [catIsOpen, setCatIsOpen] = useState();

  return (
    <div className=" pr-4">
      <details className="collapse bg-white">
        <summary
          onClick={() => {
            setCatIsOpen(!catIsOpen);
          }}
          className={`collapse-title text-[18px] px-4! w-full  font-semibold flex justify-between items-center ${!catIsOpen ? "text-base-strong-text" : "text-[#D9176C80]"}`}
        >
          <h1>{titleHeading}</h1>
          <p>
            <IoIosArrowDown
              className={`${!catIsOpen && "-rotate-90"} duration-300`}
            />
          </p>
        </summary>
        <div className="collapse-content text-sm text-base-strong-text">
          {data.map((el) => (
            <div key={el.id} className="flex justify-between items-center">
              <div className="flex items-center gap-2.5 pb-2.5">
                <input
                  id={`cat` + el.id}
                  type="checkbox"
                  className="checkbox checkbox-neutral w-4 h-4 rounded-sm"
                />
                <label
                  htmlFor={`cat` + el.id}
                  className="text-base-strong-text text-[14px] cursor-pointer"
                >
                  {el.title}
                </label>
              </div>
              <p className="text-base-text">{"(" + el.stock + ")"}</p>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
};

export default CollapseTool;
