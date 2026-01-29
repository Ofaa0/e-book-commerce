import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const BackBtnPageName = ({pageName}) => {
  return (
    <>
      <div className="text-black text-[16px] leading-5.25 font-normal flex items-center gap-1.5 absolute top-3 left-3 lg:hidden">
        <Link to={-1} className="font-medium">
          <MdOutlineArrowBackIos />
        </Link>
        <h1>{pageName}</h1>
      </div>
    </>
  );
};

export default BackBtnPageName;
