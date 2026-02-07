import axios from "axios";
import { useParams } from "react-router-dom";
import { url, useAuthStore } from "../store";
import { useEffect, useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import StarsRate from "../components/StarsRate";
import { CiHeart } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { singleBookImages } from "../localStore";
import BottomSectionSingleBook from "../components/singleBookComponents/BottomSectionSingleBook";

const SingleBookPage = () => {
  const [img, setImg] = useState(null);
  const { id } = useParams();
  const { token } = useAuthStore();
  const getSingleBook = async () => {
    try {
      if (!token) return;
      const res = await axios.get(url + `/book/show/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSingleBook();
  }, [id, token]);
  return (
    <div className="w-full min-h-dvh text-base-strong-text bg-white-bg flex flex-col justify-center items-center gap-17.5 overflow-hidden py-15 pb-45">
      <div>
        <div className="container w-full">
          <div className="flex items-start gap-6">
            <img
              src={img ? img : singleBookImages[0].src}
              alt="book"
              className="w-78 h-110"
            />
            <div className="flex flex-col gap-10">
              <div className="w-full flex justify-between items-start gap-9.5">
                <div className="flex w-189.5 flex-col gap-6">
                  <div>
                    <h1 className="text-base-strong-text font-bold text-[28px]">
                      Rich Dad And Poor Dad
                    </h1>
                    <p className=" text-base-text text-[16px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris et ultricies est. Aliquam in br justo varius,
                      sagittis neque ut, malesuada leo. Aliquam in justo varius,
                      sagittis neque ut, malesuada leo.Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Mauris et ultricies
                      est. Aliquam in justo varius, sagittis neque ut, malesuada
                      leo. Aliquam in justo varius, sagittis neque ut, malesuada
                      leo.
                    </p>
                  </div>
                  <div className="flex items-center gap-10">
                    <p>
                      Author <br />{" "}
                      <span className="text-base-strong-text font-bold text-[18px]">
                        {"Robert T. Kiyosaki"}
                      </span>
                    </p>
                    <p>
                      Publication Year <br />{" "}
                      <span className="text-base-strong-text font-bold text-[18px]">
                        {"1997"}
                      </span>
                    </p>
                    <p>
                      Book <br />{" "}
                      <span className="text-base-strong-text font-bold text-[18px]">
                        {"1 Of 1"}
                      </span>
                    </p>
                    <p>
                      Pages <br />{" "}
                      <span className="text-base-strong-text font-bold text-[18px]">
                        {"336"}
                      </span>
                    </p>
                    <p>
                      Language <br />{" "}
                      <span className="text-base-strong-text font-bold text-[18px]">
                        {"English"}
                      </span>
                    </p>
                  </div>
                </div>
                <div id="media-icons" className="flex items-center gap-3">
                  <img src="../../public/facemedia.png" alt="media icon" />
                  <img src="../../public/instamedia.png" alt="media icon" />
                  <img src="../../public/xmedia.png" alt="media icon" />
                  <img src="../../public/whatsmedia.png" alt="media icon" />
                  <IoShareSocialOutline className="text-5xl text-base-text pl-3" />
                </div>
              </div>
              <StarsRate />
              <div className=" flex justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="font-semibold text-[36px] ">$40.00</h3>
                  <h4 className="font-semibold text-[24px] text-base-text">
                    $50.00
                  </h4>
                </div>
                <div className="flex gap-10 items-center">
                  <div className="flex items-center gap-6 ">
                    <button className="btn btn-secondary rounded-full bg-white text-purple-them text-2xl p-0 h-5 w-5 flex justify-center items-center">
                      -
                    </button>
                    <p className="text-[30px] font-semibold">1</p>
                    <button className="btn btn-secondary rounded-full bg-white text-purple-them text-2xl p-0 h-5 w-5 flex justify-center items-center">
                      +
                    </button>
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
          <div className="flex items-center gap-3 pt-4">
            {singleBookImages.map((el, index) => (
              <img
                key={id}
                onClick={() => {
                  setImg(el.src);
                }}
                src={el.src}
                alt="book imgs"
                className={`w-12 h-18 ${img === el.src && "border border-amber-400"} cursor-pointer`}
              />
            ))}
          </div>
        </div>
      </div>
      <BottomSectionSingleBook />
    </div>
  );
};

export default SingleBookPage;
