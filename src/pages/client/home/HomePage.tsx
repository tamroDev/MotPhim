import Button from "../../../components/button/Button";
import { arrRason, arrTrending } from "../../../dataMockup/homeData";
import settings from "../../../ultils/settingSlick";
import ItemReason from "./components/ItemReason";
import ItemTrending from "./components/ItemTrending";
import Slider from "react-slick";

const HomePage = () => {
  return (
    <div>
      <div className="bg-banner bg-cover bg-center bg-no-repeat w-full h-[50vh] sm:h-[80vh] lg:h-[100vh] relative">
        <div className="absolute inset-0 bg-[#000000a6] bg-opacity-10 z-0"></div>

        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-[70%] z-10 w-full px-4">
          <div className="text-center max-w-[70%] sm:max-w-[60%] lg:max-w-[36.5rem] 2xl:max-w-[39rem] mx-auto">
            <h1 className="text-white mb-[12px] leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[75px] text-[23px] sm:text-[40px] xl:text-[56px] 2xl:text-[64px] font-extrabold sm:mb-[1rem]">
              Chương trình truyền hình, phim không giới hạn và nhiều nội dung
              khác
            </h1>
            <h3 className="text-[12px] text-white sm:text-[20px] font-medium mb-[12px] sm:mb-[1rem] md:mb-[2rem]">
              Giá từ 70.000 ₫. Hủy bất kỳ lúc nào.
            </h3>
            <p className="text-[10px] text-white sm:text-[15px] leading-[16px] sm:leading-[24px] mb-[12px] sm:mb-[0.5rem]">
              Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư
              cách thành viên của bạn.
            </p>
            <div className="w-full flex flex-col max-w-[80%] mx-auto sm:max-w-[100%] sm:flex-row gap-2">
              <input
                type="text"
                className="h-[32px] sm:h-[54px] w-full sm:w-[63%] border-[2px] border-[#757675] px-3 py-2 text-[10px] sm:text-[13px] md:text-[16px] text-white rounded-sm placeholder:text-[#9d9d9d] bg-[#00000059] outline-white sm:px-4 sm:py-5"
                placeholder="Địa chỉ email"
              />
              <Button
                className="leading-[54px] h-[32px] sm:h-[54px] w-full sm:w-[35%] px-2 text-[12px] sm:text-[18px] md:text-[24px] sm:px-4 sm:py-5"
                type="submit"
              >
                Bắt đầu
                <i className="fa-solid fa-chevron-right"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="container-page">
          <div className="pt-[50px]">
            <h1 className="text-[24px] font-medium mb-[30px] px-2">
              Hiện đang thịnh hành
            </h1>
            <Slider {...settings}>
              {arrTrending.map((item, index) => (
                <ItemTrending key={index} src={item.src} index={index + 1} />
              ))}
            </Slider>
          </div>
          <div className="py-[50px]">
            <h1 className="text-[24px] font-medium mb-[30px]">
              Thêm lý do để tham gia
            </h1>
            <div className="w-full grid xl:grid-cols-4 gap-3 lg:grid-cols-2 grid-cols-1">
              {arrRason.map((item, index) => (
                <ItemReason
                  description={item.description}
                  icon={item.icon}
                  title={item.title}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
