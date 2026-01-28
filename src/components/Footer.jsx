import { Link } from "react-router-dom";
import { navLinks } from "../localStore";
import logo from "../../public/logo.png";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full py-30 bg-secondery-bg justify-center items-center hidden lg:flex">
      <div className="container flex flex-col justify-center items-center w-full h-full">
        <div
          className="flex justify-between items-center w-full border-b border-gray-400
         pb-4"
        >
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
          <div className="flex items-center justify-center gap-6 text-[22px]">
            <FaFacebook className="cursor-pointer" />
            <IoLogoInstagram className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center justify-between w-full pt-4">
          <p className="text-[14px]">{"<Developed By> EraaSoft <All Copy Rights Reserved @2024"}</p>
          <div className="flex justify-center items-center gap-4.5 relative">
            <FaEarthAmericas className="text-[22px]" />
            <button className="py-1 pe-13 ps-4 bg-transparent border rounded-lg text-gray-400 text-[14px]">English</button>
            <span className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-400">{">"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
