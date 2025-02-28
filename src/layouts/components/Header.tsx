import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import { useState, useEffect } from 'react';
import { getCategories } from '../../services/categories.service';
import { Category } from '../../types/category.type';

type THeader = {
  typeLayout: boolean;
};

const Header = ({ typeLayout }: THeader) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [listCategory, setListCategory] = useState<Category[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsScrolled]);

  useEffect(() => {
    (async () => {
      const result = await getCategories();
      setListCategory(result);
    })();
  }, []);

  return (
    <header
      className={`h-[50px] w-full transition-all duration-500 fixed top-0 left-0 right-0 z-[9999] bg-transparent ${
        isScrolled ? 'bg-white backdrop-opacity-50' : 'backdrop-blur-[1px]'
      }`}
    >
      <div className="container-page h-full flex justify-between items-center">
        <Link to={'/'}>
          <img
            className="h-[25px] w-full max-w-[80px] sm:max-w-[150px] "
            src="/images/netflixLogo.svg"
            alt=""
          />
        </Link>

        {typeLayout ? (
          <div className="flex justify-center items-center gap-1 sm:gap-2">
            {/* <Link to={"/auth/login"}>
              <Button
                className={` text-[12px] sm:text-[16px] tracking-[.3px] hover:bg-transparent hover:border-white `}
                type="button"
                children="Đăng nhập"
              />
            </Link>
            <Link to={"/auth/register"}>
              <Button
                className={`text-[12px] sm:text-[16px] tracking-[.3px] hover:bg-transparent hover:border-white`}
                type="button"
                children="Đăng ký"
              />
            </Link> */}
            <div>
              <div>
                <div className="flex justify-center items-center uppercase">
                  <h1 className="text-white text-[16px] font-medium">
                    Thể Loại
                  </h1>
                  <img src="/public/images/down.png" alt="" />
                </div>
                {/* {listCategory.map(item => (
                  <Link to={''}>{item.name}</Link>
                ))} */}
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </header>
  );
};

export default Header;
