import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const CollapseTool = ({ data, titleHeading, targetCats, setTargetCats }) => {
  const [catIsOpen, setCatIsOpen] = useState();
  const chooseCats = (categoryName) => {
    setTargetCats((prev) =>
      prev.includes(categoryName)
        ? prev.filter((cat) => cat !== categoryName)
        : [...prev, categoryName],
    );
  };
  useEffect(() => {
    console.log("Updated targetCats:", targetCats);
  }, [targetCats]);

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
              <div className="flex items-center gap-2.5 mb-2.5">
                <input
                  checked={targetCats.includes(el.categoryName)}
                  onChange={() => chooseCats(el.categoryName)}
                  id={el.id}
                  type="checkbox"
                  className="checkbox checkbox-neutral w-4 h-4 rounded-sm"
                />
                <label
                  htmlFor={el.id}
                  className="text-base-strong-text text-[14px] cursor-pointer"
                >
                  {el.categoryName}
                </label>
              </div>
              <p className="text-base-text">{"(123)"}</p>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
};

export default CollapseTool;
