import { FC } from "react";
import { Link } from "react-router-dom";

interface IButton {
  className?: string;
  children: React.ReactNode;
  path: string;
  logoSocial: string;
}

const ButtonSocial: FC<IButton> = ({
  path = "#",
  className,
  logoSocial,
  children,
}) => {
  return (
    <Link
      to={path}
      className={`flex justify-between items-center w-full h-[40px] px-[18%] bg-white text-black font-medium tracking-[0.5px] rounded-sm ${className} `}
    >
      {children}
      <img className="h-[28px]" src={logoSocial} />
    </Link>
  );
};

export default ButtonSocial;
