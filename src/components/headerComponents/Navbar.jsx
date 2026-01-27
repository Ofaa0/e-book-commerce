import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";
import { navLinks } from "../../localStore";
const Navbar = () => {
  const btnStyle =
    "py-3 px-4 font-open-sans border-purple-them border rounded-lg cursor-pointer  duration-300";

  return (
    <header className="bg-[url(../../../public/headerBg.png)] w-full h-84.5 bg-left bg-cover bg-no-repeat relative">
      <div className="bg-black/70 w-full h-full absolute left-0 top-0"></div>
      <nav className="bg-white/20 backdrop-blur-[1px] w-full h-23 border-b flex justify-center">
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
              to={'/login'}
              className={btnStyle + " bg-purple-them hover:bg-purple-them/70"}
            >
              Log in
            </Link>
            <Link
              to={'/signup'}
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
