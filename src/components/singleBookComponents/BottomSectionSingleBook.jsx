import { useState } from "react";
import { bottomSectionSingleBookTabs } from "../../localStore";
import ReviewCard from "./ReviewCard";
import RecommendedSection from "../homeComponents/RecommendedSection";

const BottomSectionSingleBook = () => {
  const [tab, setTab] = useState(null);
  const [id, setId] = useState(0);

  return (
    <div className="w-full flex  justify-center items-center">
      <div className="container">
        <div className="text-[26px] h-15 text-base-text flex items-start gap-20 border-b-2 border-base-text/40">
          {bottomSectionSingleBookTabs.map((el) => (
            <h2
              onClick={() => {
                setTab(el.tabName);
                setId(el.id);
              }}
              className={`cursor-pointer hover:text-base-strong-text duration-300 h-full ${tab === el.tabName && "text-base-strong-text border-b-2 border-amber-400"}`}
              key={el.id}
            >
              {el.tabName}
            </h2>
          ))}
        </div>
        <div className="pt-10">
          {id == 1 && (
            <div className="flex flex-col gap-4">
              <p>
                <span className="font-bold text-[20px] text-base-strong-text">
                  Book Title :{" "}
                </span>
                Rich Dad And Poor Dad
              </p>
              <p>
                <span className="font-bold text-[20px] text-base-strong-text">
                  Author :{" "}
                </span>
                Robert T. Kiyosaki
              </p>
              <p>
                <span className="font-bold text-[20px] text-base-strong-text">
                  Publication Date :{" "}
                </span>
                1997
              </p>
              <p>
                <span className="font-bold text-[20px] text-base-strong-text">
                  ASIN :{" "}
                </span>
                B09TWSRMCB
              </p>
              <p>
                <span className="font-bold text-[20px] text-base-strong-text">
                  Language :{" "}
                </span>
                English
              </p>
              <p>
                <span className="font-bold text-[20px] text-base-strong-text">
                  Publisher :{" "}
                </span>
                Printer
              </p>
              <p>
                <span className="font-bold text-[20px] text-base-strong-text">
                  Pages :{" "}
                </span>
                336
              </p>
              <p>
                <span className="font-bold text-[20px] text-base-strong-text">
                  Book Format :{" "}
                </span>
                Hard Cover
              </p>
              <p>
                <span className="font-bold text-[20px] text-base-strong-text">
                  Best Seller Rank :{" "}
                </span>
                #3
              </p>
            </div>
          )}
          {id == 2 && (
            <div className=" grid grid-cols-2 gap-6">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          )}
          {id == 3 && (
            <div>
              <RecommendedSection extraStyle={"py-0!"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomSectionSingleBook;
