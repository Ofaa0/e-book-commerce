import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/logo.png";
import { IoMenuSharp, IoSearchOutline } from "react-icons/io5";
import { GrMicrophone } from "react-icons/gr";
import { url, useAuthStore, useUserInfoStore } from "../../store";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { FaCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import { navLinks } from "../../localStore";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1023px)",
  });
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();
  const { token } = useAuthStore();
  const isInfoPages = pathname === "/login" || pathname === "/signup";
  const isAboutOrInfoPage =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/about" ||
    pathname.includes("/books");

  const [userInfo, setUserInfo] = useState({});
  const btnStyle =
    "py-3 px-4 font-open border-purple-them border rounded-lg cursor-pointer duration-300";

  const getUserProfileInfo = async () => {
    console.log(token);
    try {
      const res = await axios.get(url + "/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data.data);
      setUserInfo({
        firstName: res.data?.data?.first_name,
        lastName: res.data?.data?.last_name,
        email: res.data?.data?.email,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) getUserProfileInfo();
  }, [token]);

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  return (
    <header
      className={`bg-[url(../../../public/headerBg1.png)] w-full ${isInfoPages ? "h-84.5" : pathname.includes("/books") ? "h-35" : "h-dvh"} bg-left bg-cover bg-no-repeat relative ${isInfoPages ? "hidden" : "flex"} lg:flex justify-center items-center overflow-x-hidden`}
    >
      <div className="bg-black/70 w-full h-full absolute left-0 top-0"></div>
      {!isAboutOrInfoPage && (
        <div className="lg:w-134 w-4/5 z-10 rounded-[50px] overflow-x-hidden relative">
          <input
            type="search"
            placeholder="Search"
            className="pl-6 bg-white w-full py-3 text-black "
          />

          <div className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-0 text-[18px] text-white bg-purple-them w-[70px] h-full flex justify-center items-center">
            <IoSearchOutline className="text-[30px]" />
          </div>
          <GrMicrophone className="cursor-pointer text-base-text absolute text-[26px] top-1/2 -translate-y-1/2 right-21" />
        </div>
      )}
      {pathname === "/about" && (
        <div className="z-10 flex justify-center items-center w-full">
          <div className="container w-full px-4">
            <div className="flex flex-col justify-center items-center gap-4 text-white ">
              <h1 className="text-3xl lg:text-5xl font-bold">About Bookshop</h1>
              <p className="text-[18px] lg:text-[24px] font-normal text-center max-w-163">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>
            </div>
          </div>
        </div>
      )}
      <nav className="bg-white/20 backdrop-blur-[1px] w-full h-23 flex justify-center absolute top-0 left-0 z-50">
        <div className="container w-full h-full px-3 lg:px-25 flex justify-between gap-6 items-center relative">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 border-r pe-6 border-white/30">
              <img src={logo} alt="logo" />
              <h1 className="">Bookshop</h1>
            </div>
          </div>

          <div
            className={`w-full flex justify-between items-center flex-col gap-6 lg:flex-row absolute lg:static bg-black/90 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none px-6 py-8 lg:p-0 z-50 left-0 top-full transition-transform duration-300 ease-in-out ${
              showMenu ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}
          >
            <div className="flex gap-10 lg:items-center items-start w-full flex-col lg:flex-row">
              {navLinks.map((el) => (
                <Link
                  key={el.path}
                  className={`font-semibold ${pathname === el.path && "text-[#EAA451]"} hover:text-[#EAA451] duration-300`}
                  to={el.path}
                  onClick={() => isMobile && setShowMenu(false)}
                >
                  {el.title}
                </Link>
              ))}
            </div>

            <div className="w-full flex justify-end">
              {!token ? (
                <div className="flex gap-6 lg:items-center items-start flex-col lg:flex-row w-full lg:w-fit">
                  <Link
                    to={"/login"}
                    className={
                      btnStyle +
                      " bg-purple-them hover:bg-purple-them/70 text-center"
                    }
                    onClick={() => isMobile && setShowMenu(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    to={"/signup"}
                    className={
                      btnStyle +
                      " bg-white text-purple-them hover:bg-white/70 text-center"
                    }
                    onClick={() => isMobile && setShowMenu(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div className="flex gap-6 lg:items-center items-start flex-col lg:flex-row w-full lg:w-fit">
                  <FaRegHeart className="text-2xl cursor-pointer hover:text-purple-them transition-colors" />
                  <GrCart className="text-2xl cursor-pointer hover:text-purple-them transition-colors" />
                  <div className="flex items-center gap-3">
                    <FaCircleUser className="text-4xl" />
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-[16px] capitalize">
                        {userInfo.firstName || ""} {userInfo.lastName || ""}
                      </h1>
                      <p className="font-light text-[14px]">
                        {userInfo.email || ""}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <IoMenuSharp
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="text-4xl cursor-pointer lg:hidden hover:text-purple-them transition-colors"
          />
        </div>
      </nav>

      {showMenu && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setShowMenu(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
