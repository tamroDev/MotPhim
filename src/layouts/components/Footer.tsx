interface IFooter {
  className?: string;
}

const Footer = ({ className }: IFooter) => {
  return (
    <footer className={`bg-black ${className}`}>
      <div className="container-page text-gray-400 pt-8 pb-6">
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl mb-5">
            Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư
            cách thành viên của bạn.
          </p>
          <div className="inline-flex flex-col sm:flex-row justify-center">
            <input
              type="email"
              placeholder="Địa chỉ email"
              className="px-4 py-3 mb-2 sm:mb-0 sm:mr-2 w-72 bg-black border border-gray-600 rounded focus:outline-none focus:border-gray-300"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded">
              Bắt đầu
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-between space-y-4 sm:space-y-0 text-sm">
          <div className="flex flex-col space-y-2">
            <a href="#!" className="hover:underline">
              Câu hỏi thường gặp
            </a>
            <a href="#!" className="hover:underline">
              Quan hệ với nhà đầu tư
            </a>
            <a href="#!" className="hover:underline">
              Quyền riêng tư
            </a>
            <a href="#!" className="hover:underline">
              Kiểm tra tốc độ
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <a href="#!" className="hover:underline">
              Trung tâm trợ giúp
            </a>
            <a href="#!" className="hover:underline">
              Việc làm
            </a>
            <a href="#!" className="hover:underline">
              Tuỳ chọn cookie
            </a>
            <a href="#!" className="hover:underline">
              Thông báo pháp lý
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <a href="#!" className="hover:underline">
              Tài khoản
            </a>
            <a href="#!" className="hover:underline">
              Các cách xem
            </a>
            <a href="#!" className="hover:underline">
              Thông tin doanh nghiệp
            </a>
            <a href="#!" className="hover:underline">
              Chỉ có trên Netflix
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <a href="#!" className="hover:underline">
              Trung tâm đa phương tiện
            </a>
            <a href="#!" className="hover:underline">
              Điều khoản sử dụng
            </a>
            <a href="#!" className="hover:underline">
              Liên hệ với chúng tôi
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
          <div className="mb-4 sm:mb-0">
            <select
              className="bg-black border border-gray-600 text-gray-400 px-2 py-1 rounded focus:outline-none"
              defaultValue="vi"
            >
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
            </select>
          </div>
          <p className="text-sm text-gray-500">Netflix Việt Nam</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
