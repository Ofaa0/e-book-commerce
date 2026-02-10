import axios from "axios";
import settingsImg from "../../public/settings.png";
import { adminToken, url, useAuthStore } from "../store";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosStar } from "react-icons/io";
import cats from "../cats.json";
import books from "../books.json";
import CollapseTool from "../components/booksComponents/CollapseTool";
import { GrCart, GrMicrophone } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import TabsTool from "../components/booksComponents/TabsTool";
import { CiHeart } from "react-icons/ci";
import { Outlet } from "react-router-dom";
import { paginationBtns } from "../localStore";
import Loading from "../components/Loading";

const BooksPage = () => {
  const [loading, setLoading] = useState(true);
  const [targetCats, setTargetCats] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(17);
  const booksPerPage = 3;

  // ===========================
  const [shopBooks, setShopBooks] = useState([]);
  const [catsCol, setCatsCol] = useState([]);
  const [btn1, setBtn1] = useState(0);
  const [selectedBtn, setSelectedBtn] = useState(null);
  const { token } = useAuthStore();

  const getPaginationButtons = () => {
    let start = Math.max(currentPage - 1, 1);
    let end = Math.min(start + booksPerPage - 1, totalPages);

    if (end - start + 1 < booksPerPage) {
      start = Math.max(end - booksPerPage + 1, 1);
    }

    const buttons = [];
    for (let i = start; i <= end; i++) {
      buttons.push(i);
    }
    return buttons;
  };

  const getBooks = async () => {
    try {
      const res = await axios.get(url + "/book", {
        headers: {
          Authorization: `Bearer ${adminToken}`,
          Accept: "application/json",
        },
        params: {
          page: currentPage,
          booksPerPage,
          category: targetCats,
          // filters:
          //   targetCats.length > 0
          //     ? {
          //         category: {
          //           categoryName: {
          //             $in: targetCats,
          //           },
          //         },
          //       }
          //     : {},
        },
      });
      setShopBooks(res.data?.data?.books);
      setCatsCol(res.data?.data?.categories);

      console.log(res.data?.data?.categories);
      setLoading(false);

      console.log(shopBooks);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!token) return;
    getBooks();
  }, [token, currentPage, targetCats]);
  console.log(token);
  useEffect(() => {
    setSelectedBtn(paginationBtns[0]);
  }, []);

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
            <CollapseTool
              targetCats={targetCats}
              setTargetCats={setTargetCats}
              data={catsCol}
              titleHeading={"Categories"}
            />
            <CollapseTool
              targetCats={targetCats}
              setTargetCats={setTargetCats}
              data={catsCol}
              titleHeading={"Publisher"}
            />
            <CollapseTool
              targetCats={targetCats}
              setTargetCats={setTargetCats}
              data={catsCol}
              titleHeading={"Year"}
            />
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
                {loading && <Loading />}
                {shopBooks.map((el) => (
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
                            {el.bookName}
                          </h1>
                          <p className="w-[424px] text-base-text text-[16px]">
                            {el.description}
                          </p>
                        </div>
                        <p className="text-[#EBC305] border border-[#EBC305] rounded-lg py-2 px-3 bg-white">
                          {el.discount}% Discount code: Ne212
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
                            <p>
                              Author <br />{" "}
                              <span className="text-base-strong-text font-bold text-[18px]">
                                {el.author}
                              </span>
                            </p>
                            <p>
                              year <br />{" "}
                              <span className="text-base-strong-text font-bold text-[18px]">
                                {el.publicationYear}
                              </span>
                            </p>
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
                  </div>
                ))}
                <div className="join flex justify-center gap-3">
                  <button
                    onClick={() => {
                      if (currentPage > 1) {
                        setCurrentPage(currentPage - 1);
                      }
                    }}
                    disabled={!(currentPage > 0)}
                    className="join-item btn bg-white text-purple-them rounded-lg font-bold border-none"
                  >
                    « Previous
                  </button>
                  {getPaginationButtons().map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`join-item btn rounded-lg font-bold border-none ${
                        currentPage === page
                          ? "bg-purple-them text-white"
                          : "bg-white text-purple-them"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                    }}
                    disabled={currentPage === totalPages}
                    className="join-item btn bg-white text-purple-them rounded-lg font-bold border-none"
                  >
                    Next »
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
