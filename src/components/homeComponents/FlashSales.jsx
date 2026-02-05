import FlashSalesCounter from "../FlashSalesCounter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { bestSeller } from "../../localStore";
import { url } from "../../store";
import { IoIosStar } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import axios from "axios";

const FlashSales = () => {
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
    <div className="flex justify-center items-center py-30 bg-gray-100">
      <div className="container px-3">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center">
          <div className="flex flex-col gap-4 lg:w-129">
            <h1 className="text-base-strong-text text-[26px] font-bold">
              Flash Sale
            </h1>
            <p className="text-base-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
          <FlashSalesCounter />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {homeBooks.map((el, index) => (
              <SwiperSlide key={index}>
                {/* Your product card component goes here */}
                <div
                  key={el.bookId}
                  className="p-4 rounded-lg text-white flex flex-col lg:flex-row justify-between gap-10 items-center lg:h-[344px] bg-secondery-bg"
                >
                  <img src={bestSeller[0]} alt="book1" />
                  <div className="flex flex-col justify-between h-full">
                    <div
                      id="book-text"
                      className="flex flex-col justify-center gap-4 h-full"
                    >
                      <div className="flex flex-col">
                        <h1 className="text-[18px] font-bold text-white">
                          {el.bookName}
                        </h1>
                        <p className="text-[#FFFFFF4D]">
                          Author:{" "}
                          <span className="text-white font-semibold">
                            {el.author}
                          </span>
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-2">
                          <div className=" flex items-center gap-1">
                            <IoIosStar className="text-[#EBC305]" />
                            <IoIosStar className="text-[#EBC305]" />
                            <IoIosStar className="text-[#EBC305]" />
                            <IoIosStar className="text-[#EBC305]" />
                            <IoIosStar className="text-base-text" />
                            <p className="text-[#FFFFFF4D] text-[16px] font-semibold">
                              ({el.countReview} Reviews)
                            </p>
                          </div>
                          <p className="text-[#FFFFFF4D]">
                            Rate:{" "}
                            <span className="text-white font-semibold">
                              4.2
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="font-bold text-[#FFFFFF4D] text-16px">
                          ${el.price}
                        </div>
                        <div className="font-bold  text-2xl">
                          ${el.final_price}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="grid grid-cols-5 h-2.5 w-full rounded-lg overflow-hidden">
                          <div className="col-span-4 bg-[#EAA451] rounded-lg"></div>
                          <div className=" bg-[#FFFFFF1A]"></div>
                        </div>
                        <p className="text-[#ffffff4d] text-[12px]">
                          {el.stock} books left
                        </p>
                      </div>
                      <div className="grid grid-cols-5 gap-4">
                        <div className="col-span-4"></div>
                        <button className="cursor-pointer rounded-lg border bg-purple-them border-purple-them p-3 flex justify-center items-center hover:scale-105 duration-300 self-end">
                          <GrCart className="text-white text-2xl " />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
