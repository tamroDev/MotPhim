import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getCategories } from "../../services/categories.service";
import { Category } from "../../types/category.type";

type THeader = {
  typeLayout: boolean;
};

const Header = ({ typeLayout }: THeader) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [listCategory, setListCategory] = useState<Category[]>([]);
  const [dropDown, setDropDown] = useState(false);
  const dropdownRef = useRef(null); // Ref cho dropdown
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        setDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled]);

  useEffect(() => {
    (async () => {
      const result = await getCategories();
      setListCategory(result);
    })();
  }, []);

  return (
    <header
      className={`h-[50px] w-[99.2%] mx-auto transition-all duration-500 fixed top-[8px] rounded-sm left-0 right-0 z-[9999] bg-[#0000005b] ${
        isScrolled ? "bg-white backdrop-opacity-50" : "backdrop-blur-[1px]"
      }`}
    >
      <div className="container-page h-full flex justify-between items-center">
        <div className="flex justify-center items-center gap-7">
          <Link to={"/"}>
            <img
              className="h-[25px] w-full max-w-[80px] sm:max-w-[150px] "
              src="/images/netflixLogo.svg"
              alt=""
            />
          </Link>
          <div ref={dropdownRef} className="relative w-[400px]">
            <input
              type="text"
              className={`w-[100%] border-[1px] h-[32px] pl-10 text-[13px] rounded-xl  ${
                isScrolled
                  ? "bg-white text-black border-black"
                  : "bg-[#2e2e2edc] text-[#b3bac1] border-[2e2e2edc]"
              }`}
              placeholder="Tìm phim và chương trình ..."
            />
            <div className="absolute top-0 bottom-0 left-0 px-3 flex justify-center items-center">
              <i
                className={`fa-solid fa-magnifying-glass text-[15px] ${
                  isScrolled ? "text-black" : "text-[#b3bac1]"
                }`}
              ></i>
            </div>
          </div>
        </div>

        {typeLayout ? (
          <div
            className={`flex justify-center items-center gap-1 sm:gap-3 text-[15px] font-medium ${
              isScrolled ? "text-black" : "text-white "
            }`}
          >
            {/* <h1
              className={`cursor-pointer border-b-[1px] transition-all duration-150 border-[#2e2e2e00] ${
                isScrolled ? "hover:border-black" : "hover:border-white"
              }`}
            >
              Phim mới cập nhập
            </h1>
            <h1
              className={`cursor-pointer border-b-[1px] transition-all duration-150 border-[#2e2e2e00] ${
                isScrolled ? "hover:border-black" : "hover:border-white"
              }`}
            >
              Hoạt hình
            </h1>
            <h1
              className={`cursor-pointer border-b-[1px] transition-all duration-150 border-[#2e2e2e00] ${
                isScrolled ? "hover:border-black" : "hover:border-white"
              }`}
            >
              TV Show
            </h1>
            <h1
              className={`cursor-pointer border-b-[1px] transition-all duration-150 border-[#2e2e2e00] ${
                isScrolled ? "hover:border-black" : "hover:border-white"
              }`}
            >
              Phim lẻ
            </h1>
            <h1
              className={`cursor-pointer border-b-[1px] transition-all duration-150 border-[#2e2e2e00] ${
                isScrolled ? "hover:border-black" : "hover:border-white"
              }`}
            >
              Phim bộ
            </h1> */}
            {[
              "Phim mới cập nhật",
              "Hoạt hình",
              "TV Show",
              "Phim lẻ",
              "Phim bộ",
            ].map((item, index) => (
              <h1
                key={index}
                className={`relative cursor-pointer transition-all duration-300 
          ${isScrolled ? "text-black" : "text-white"} 
          after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
          after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left
          hover:after:scale-x-100 hover:after:transition-transform hover:after:duration-300`}
              >
                {item}
              </h1>
            ))}
            <div className="relative">
              <div
                ref={buttonRef}
                onClick={() => setDropDown((prev) => !prev)}
                className="flex items-center gap-1 cursor-pointer p-2 rounded-md transition"
              >
                <h1
                  className={`relative cursor-pointer transition-all duration-300 
                    ${isScrolled ? "text-black" : "text-white"} 
                    after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
                    after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left
                    hover:after:scale-x-100 hover:after:transition-transform hover:after:duration-300`}
                >
                  Thể Loại
                </h1>
                <img
                  src={`/public/images/${
                    isScrolled ? "down-black" : "down-white"
                  }.png`}
                  alt=""
                  className={`transition-transform duration-300 ${
                    dropDown ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {/* Nội dung dropdown */}
              <div
                ref={dropdownRef}
                className={`absolute top-[57px] right-0 w-[400px] bg-white text-black rounded-lg shadow-lg p-4 
          transition-all duration-300 ease-out transform ${
            dropDown
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
              >
                {/* Mũi tên trên dropdown */}
                <div
                  className={`absolute top-[-7px] right-12 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent 
            border-b-[10px] border-b-white transition-all duration-300 ease-out ${
              dropDown
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[-5px]"
            }`}
                ></div>

                <div className="flex flex-wrap gap-3">
                  {listCategory.map((item, index) => (
                    <Link
                      key={index}
                      className="text-[13px] hover:underline text-gray-800 transition hover:text-black"
                      to={""}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
