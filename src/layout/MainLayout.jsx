import { Outlet } from "react-router-dom";
import Navbar from "../components/headerComponents/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="w-full h-dvh bg-amber-600">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;
