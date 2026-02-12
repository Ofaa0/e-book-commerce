import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { dropdownList } from "../../localStore";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store";

const DropdownList = () => {
  const [catIsOpen, setCatIsOpen] = useState(false);
  const { authLogout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="relative z-50">
      <IoIosArrowDown
        onClick={() => {
          setCatIsOpen(!catIsOpen);
        }}
        className={`${!catIsOpen && "-rotate-90"} duration-300 cursor-pointer`}
      />
      <div
        className={`p-6 grid grid-cols-1 gap-4 bg-white absolute -left-30 top-10 mt-2 shadow-2xl text-base-strong-text rounded-lg min-w-max ${!catIsOpen && "hidden"}`}
      >
        {dropdownList.map((el, index) => {
          const Icon = el.icon;
          return (
            <div
              onClick={() => {
                setCatIsOpen(!catIsOpen);
                if (index == dropdownList.length - 1) {
                  authLogout();
                } else {
                  navigate("/" + el.path);
                }
              }}
              key={el.id}
              className="flex items-center gap-2.5 whitespace-nowrap cursor-pointer"
            >
              <span>
                <Icon />
              </span>
              <span>{el.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownList;
