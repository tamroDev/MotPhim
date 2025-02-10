import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className={`h-[1000px] mt-[80px] `}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
