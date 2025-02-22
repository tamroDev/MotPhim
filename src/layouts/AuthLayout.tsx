import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const AuthLayout = () => {
  return (
    <div className="bg-black sm:bg-[url('/public/images/banner.jpg')] h-screen bg-cover bg-center bg-no-repeat">
      <Header typeLayout={false} />
      <div className="size-full bg-[#000000a6]">
        <Outlet />
      </div>
      <footer className="bg-[#161616] text-gray-400 text-sm py-6 px-10">
        <div className="max-w-6xl mx-auto py-12">
          <p className="mb-10">Bạn có câu hỏi? Liên hệ với chúng tôi.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <a href="#" className="hover:underline">
              Câu hỏi thường gặp
            </a>
            <a href="#" className="hover:underline">
              Trung tâm trợ giúp
            </a>
            <a href="#" className="hover:underline">
              Điều khoản sử dụng
            </a>
            <a href="#" className="hover:underline">
              Quyền riêng tư
            </a>
            <a href="#" className="hover:underline">
              Tùy chọn cookie
            </a>
            <a href="#" className="hover:underline">
              Thông tin doanh nghiệp
            </a>
          </div>
          <div>
            <button className="border border-gray-500 px-4 py-2 rounded text-white flex items-center">
              <span className="mr-2">🌐</span> Tiếng Việt ▼
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
