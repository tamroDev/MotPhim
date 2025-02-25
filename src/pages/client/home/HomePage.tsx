import Button from '../../../components/Button';

const HomePage = () => {
  return (
    <div className="bg-banner bg-cover bg-center bg-no-repeat w-full h-[50vh] sm:h-[80vh] lg:h-[100vh] relative">
      <div className="absolute inset-0 bg-[#000000a6] bg-opacity-10 z-0"></div>

      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-[80%] z-10 w-full px-4">
        <div className="text-center leading-tight max-w-[70%] sm:max-w-[50%] lg:max-w-[36.5rem] mx-auto">
          <h1 className="text-white text-[20px] sm:text-[25px] md:text-[35px] lg:text-[40px] xl:text-[56px] font-extrabold md:mb-[1rem]">
            Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác
          </h1>
          <h3 className="text-[12px] text-white sm:text-[20px] font-medium md:mb-[2rem]">
            Giá từ 70.000 ₫. Hủy bất kỳ lúc nào.
          </h3>
          <p className="text-[10px] text-white sm:text-[16px] leading-[24px]">
            Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư
            cách thành viên của bạn.
          </p>
          <div className="flex gap-3 w-full h-[72px] md:pt-[16px] ">
            <input
              type="text"
              className="flex-[0_0_70%] border-[2px] border-[#757675] px-4 py-5 text-[16px] text-white rounded-sm placeholder:text-[#9d9d9d] bg-[#00000059] outline-white"
              placeholder="Địa chỉ email"
            />
            <Button
              className="flex-[0_0_30%] !h-full px-3 py-5 text-[24px]"
              type="submit"
            >
              Bắt đầu
              <i className="fa-solid fa-chevron-right"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
