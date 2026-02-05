import { useState } from "react";

const TabsTool = ({ data }) => {
  const [tab, setTab] = useState(null);

  return (
    <div className="tabs tabs-box bg-transparent flex gap-3">
      {data.slice(1).map((el) => (
        <input
          onClick={() => {
            setTab(el);
          }}
          type="radio"
          name="my_tabs_1"
          className={`tab border border-base-text text-base-strong-text ${tab == el && "text-white bg-[#D9176C80] border-none"}`}
          aria-label={el.title}
        />
      ))}
    </div>
  );
};

export default TabsTool;
