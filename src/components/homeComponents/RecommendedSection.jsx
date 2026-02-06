import { useEffect, useState } from "react";
import { bestSeller } from "../../localStore";
import axios from "axios";
import { url } from "../../store";
import { IoIosStar } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { GrCart } from "react-icons/gr";

const RecommendedSection = ({extraStyle}) => {
  const [homeBooks, setHomeBooks] = useState([]);
  const getRecommendedBooks = async () => {
    try {
      const res = await axios.get(url + "/home");
      console.log(res.data.data.recommended);
      setHomeBooks(res.data?.data?.recommended);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getRecommendedBooks();
  }, []);
  return (
    <div className={`py-30 bg-white-bg flex justify-center items-center ${extraStyle}`}>
      <div className="container px-3">
        <h1 className="text-base-strong-text font-bold text-[26px] pb-10">
          Recomended For You
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-base-strong-text">
          {homeBooks.map((el) => (
            <div
              key={el.bookId}
              className="p-10 flex flex-col lg:flex-row justify-between gap-10 items-center lg:h-[344px]"
            >
              <img src={bestSeller[0]} alt="book1" />
              <div className="flex flex-col justify-between h-full">
                <div
                  id="book-text"
                  className="flex flex-col justify-center gap-6 h-full"
                >
                  <div className="flex flex-col">
                    <h1 className="text-[18px] font-bold text-base-strong-text">
                      {el.bookName}
                    </h1>
                    <p className="text-base-text">
                      Author:{" "}
                      <span className="text-base-strong-text font-semibold">
                        {el.author}
                      </span>
                    </p>
                    <p className="text-base-text pt-2">{el.description}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                      <div className=" flex items-center gap-1">
                        <IoIosStar className="text-[#EBC305]" />
                        <IoIosStar className="text-[#EBC305]" />
                        <IoIosStar className="text-[#EBC305]" />
                        <IoIosStar className="text-[#EBC305]" />
                        <IoIosStar className="text-base-text" />
                        <p className="text-base-text text-[16px] font-semibold">
                          ({el.countReview} Reviews)
                        </p>
                      </div>
                      <p className="text-base-text">
                        Rate:{" "}
                        <span className="text-base-strong-text font-semibold">
                          4.2
                        </span>
                      </p>
                    </div>
                    <div className="font-bold text-base-strong-text text-2xl">
                      ${el.final_price}
                    </div>
                  </div>
                <div className="grid grid-cols-5 gap-4">
                  <button className="cursor-pointer col-span-4 bg-purple-them rounded-lg text-white flex items-center justify-center gap-2.5 hover:scale-105 duration-300">
                    Add To Cart <GrCart className="text-xl" />
                  </button>
                  <button className="cursor-pointer rounded-lg border border-purple-them p-3 flex justify-center items-center hover:scale-105 duration-300">
                    <CiHeart className="text-purple-them text-2xl " />
                  </button>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedSection;
