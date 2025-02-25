import React, { FC } from "react";

interface IItemRason {
  title: string;
  description: string;
  icon: string;
}

const ItemReason: FC<IItemRason> = ({ title, description, icon }) => {
  return (
    <div className="bg-gradient-to-b from-[#1B1D3B] via-[#1E162A] to-[#6F1550] w-full rounded-xl pt-[25px] pb-[15px] sm:pt-[40px] sm:pb-[20px] px-4 flex justify-between flex-col">
      <div className="mb-[20px] lg:mb-[40px] xl:mb-[80px]">
        <h1 className="text-[18px] sm:text-[24px] font-[500] leading-[30px] mb-4 lg:mb-5  xl:mb-7">
          {title}
        </h1>
        <p className="text-[#B6B5BE] text-[12px] sm:text-[15px] leading-[18px]">
          {description}
        </p>
      </div>
      <div
        className="flex justify-end"
        dangerouslySetInnerHTML={{ __html: icon }}
      />
    </div>
  );
};

export default ItemReason;
