import axios from "axios";
import settingsImg from "../../public/settings.png";
import { url, useAuthStore } from "../store";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosStar } from "react-icons/io";
import cats from "../cats.json";
import books from "../books.json";
import CollapseTool from "../components/booksComponents/CollapseTool";
import { GrCart, GrMicrophone } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import TabsTool from "../components/booksComponents/TabsTool";
import { CiHeart } from "react-icons/ci";

const BooksPage = () => {
  const { token } = useAuthStore();
  const getBooks = async () => {
    try {
      const res = await axios.get(url + "/book", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getBooks();
  }, [token]);
  console.log(token);

  return (
    <div className="w-full  bg-white-bg flex justify-center items-start">
      <div className="container">
        <div className="w-full grid grid-cols-12">
          <div className="col-span-3 pt-15 pb-2 flex flex-col gap-8">
            <div className=" flex items-center gap-4">
              <img src={settingsImg} alt="settingsImg" />
              <h1 className="text-2xl font-semibold text-base-strong-text">
                Filter
              </h1>
            </div>
            <CollapseTool data={cats} titleHeading={"Categories"} />
            <CollapseTool data={cats} titleHeading={"Publisher"} />
            <CollapseTool data={cats} titleHeading={"Year"} />
          </div>
          <div className="col-span-9 pt-15 border-l border-base-text pl-6">
            <div className="flex justify-center items-center gap-6.5  mb-6">
              <div className="lg:w-189.5 w-4/5 z-10 rounded-[50px] overflow-hidden relative">
                <input
                  type="search"
                  placeholder="Search"
                  className="pl-6 bg-white w-full py-3 text-black "
                />

                <div className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-0 text-[18px] text-purple-them bg-white w-[70px] h-full flex justify-center items-center border-l border-base-text">
                  <IoSearchOutline className="text-[30px]" />
                </div>
                <GrMicrophone className="cursor-pointer text-base-text absolute text-[26px] top-1/2 -translate-y-1/2 right-21" />
              </div>
              <div className="py-2.5 px-4 w-50 rounded-xl bg-white text-[18px] text-base-text flex justify-between items-center">
                <p>Sort by</p>
                <IoIosArrowDown className="-rotate-90" />
              </div>
            </div>
            {/* name of each tab group should be unique */}
            <TabsTool data={cats} />
            <div className="pt-10 py-32.25 w-full">
              <div className="w-full grid grid-cols-1 gap-15">
                {books.map((el) => (
                  <div
                    key={el.id}
                    className="w-full flex items-start gap-10 text-base-strong-text"
                  >
                    <img src="../../public/1.png" alt="book image" />
                    <div className="w-full flex flex-col gap-6">
                      <div
                        id="first-line"
                        className="flex justify-between items-start w-full"
                      >
                        <div>
                          <h1 className="text-base-strong-text font-bold text-[18px]">
                            {el.title}
                          </h1>
                          <p className="w-[424px] text-base-text text-[16px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris et ultricies est. Aliquam in justo
                            varius, sagittis neque ut, malesuada leo. Aliquam in
                            justo varius, sagittis neque ut, malesuada leo.
                          </p>
                        </div>
                        <p className="text-[#EBC305] border border-[#EBC305] rounded-lg py-2 px-3 bg-white">
                          25% Discount code: Ne212
                        </p>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div id="third-line">
                          <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-2">
                              <div className=" flex items-center gap-1">
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
                                <span className="text-base-strong-text font-semibold">
                                  4.2
                                </span>
                              </p>
                            </div>
                            <div className="font-bold text-base-strong-text text-2xl">
                              ${"52.3"}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-10">
                            <h1>
                              Author <br />{" "}
                              <span className="text-base-strong-text font-bold text-[18px]">
                                {el.author}
                              </span>
                            </h1>
                            <h1>
                              year <br />{" "}
                              <span className="text-base-strong-text font-bold text-[18px]">
                                {el.year}
                              </span>
                            </h1>
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
                      {/* <div id="fourth-line"></div> */}
                      <div className="inline-flex items-center gap-1 border border-gray-300 rounded-lg bg-white p-1 w-fit">
                        <button className="px-3 py-1.5 text-sm font-medium text-pink-600 hover:bg-gray-50 rounded transition-colors">
                          &lt; Previous
                        </button>

                        <button className="min-w-[2rem] px-3 py-1.5 text-sm font-medium text-white bg-pink-600 rounded shadow-sm">
                          1
                        </button>

                        <button className="min-w-[2rem] px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded transition-colors">
                          2
                        </button>

                        <button className="min-w-[2rem] px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded transition-colors">
                          3
                        </button>

                        <span className="px-2 py-1.5 text-sm text-gray-500">
                          ...
                        </span>

                        <button className="px-3 py-1.5 text-sm font-medium text-pink-600 hover:bg-gray-50 rounded transition-colors">
                          Next &gt;
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
