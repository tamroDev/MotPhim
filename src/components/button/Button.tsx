import React, { FC } from 'react';

type TButton = 'submit' | 'button';

interface IButton {
  type: TButton;
  className?: string;
  children: React.ReactNode;
}

const Button: FC<IButton> = ({ type, className = '', children, ...props }) => {
  return (
    <button
      type={type}
      className={`transition-all duration-300 h-[20px] sm:h-[30px] p-3 sm:p-4 text-white cursor-pointer bg-[rgb(229,9,20)] border-[rgb(229,9,20)] border-[.1px] flex justify-center items-center rounded-sm font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
