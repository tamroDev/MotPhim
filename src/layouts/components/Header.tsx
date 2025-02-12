import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsScrolled]);

  return (
    <header
      className={`h-[80px] w-full transition-all duration-500 fixed top-0 left-0 right-0 z-[9999] bg-transparent ${
        isScrolled ? 'backdrop-blur-[5px]' : 'backdrop-blur-[1px]'
      }`}
    >
      <div className="container-page h-full flex justify-between items-center">
        <Link to={'/'}>
          <img
            className="h-[40px] w-full max-w-[80px] sm:max-w-[150px] "
            src="/images/netflixLogo.svg"
            alt=""
          />
        </Link>

        <div className="flex justify-center items-center gap-1 sm:gap-2">
          <Link to={'/sign-in'}>
            <Button
              className={` text-[12px] sm:text-[16px] tracking-[.3px] hover:bg-transparent hover:border-white `}
              type="button"
              children="Đăng nhập"
            />
          </Link>
          <Link to={'/sign-in'}>
            <Button
              className={`text-[12px] sm:text-[16px] tracking-[.3px] hover:bg-transparent hover:border-white`}
              type="button"
              children="Đăng ký"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
