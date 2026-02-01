import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/logo.png";
import { navLinks } from "../../localStore";
import { IoSearchOutline } from "react-icons/io5";
import { GrMicrophone } from "react-icons/gr";

const Navbar = () => {
  const { pathname } = useLocation();
  const isInfoPages = pathname == "/login" || pathname == "/signup";
  const isAboutOrInfoPage =
    pathname == "/login" || pathname == "/signup" || pathname == "/about";
  console.log(isInfoPages, pathname);

  const btnStyle =
    "py-3 px-4 font-open border-purple-them border rounded-lg cursor-pointer  duration-300";

  return (
    <header
      className={`bg-[url(../../../public/headerBg1.png)] w-full ${isInfoPages ? "h-84.5" : "h-dvh"} bg-left bg-cover bg-no-repeat relative ${isInfoPages ? "hidden" : "flex"} lg:flex justify-center items-center`}
    >
      <div className="bg-black/70 w-full h-full absolute left-0 top-0"></div>
      {!isAboutOrInfoPage && (
        <div className="w-134 z-10 rounded-[50px] overflow-hidden relative">
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
      {pathname == "/about" && (
        <div className="z-10 flex justify-center items-center w-full">
          <div className="container w-full">
            <div className="flex flex-col justify-center items-center gap-4 text-white ">
              <h1 className=" text-5xl font-bold">About Bookshop</h1>
              <p className="text-[24px] font-normal text-center w-163">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>
            </div>
          </div>
        </div>
      )}
      <nav className="bg-white/20 backdrop-blur-[1px] w-full h-23 flex justify-center absolute top-0 left-0">
        <div className="container w-full h-full px-25 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 border-r pe-6 border-white/30">
              <img src={logo} alt="logo" />
              <h1 className="">Bookshop</h1>
            </div>
            <div className="flex gap-10 items-center">
              {navLinks.map((link, index) => (
                <Link key={index + 1} className="font-semibold">
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Link
              to={"/login"}
              className={btnStyle + " bg-purple-them hover:bg-purple-them/70"}
            >
              Log in
            </Link>
            <Link
              to={"/signup"}
              className={
                btnStyle + " bg-white text-purple-them  hover:bg-white/70"
              }
            >
              Sign Up{" "}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
