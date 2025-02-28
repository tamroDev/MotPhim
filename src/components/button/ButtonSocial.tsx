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
      className={`w-full h-[40px] bg-white text-black font-medium tracking-[0.5px] rounded-sm ${className} `}
    >
      <div className="flex justify-between items-center sm:w-[100%] w-[100%] px-[50px] h-full mx-auto">
        {children}
        <img className="h-[28px]" src={logoSocial} />
      </div>
    </Link>
  );
};

export default ButtonSocial;
