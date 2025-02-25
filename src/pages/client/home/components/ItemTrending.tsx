import { FC } from "react";

interface IItemTrending {
  index: number;
  src: string;
}

const ItemTrending: FC<IItemTrending> = ({ index, src }) => {
  return (
    <div className="w-[100%] transition-transform duration-[0.3s] hover:scale-[1.05] py-[0.5rem]">
      <div
        style={{
          backgroundImage: `url(${src})`,
        }}
        className={`w-[90%] h-[110px] sm:h-[150px] xl:h-[300px] rounded-lg bg-no-repeat bg-cover mx-auto relative cursor-pointer flex justify-center items-center`}
      >
        <div className="absolute bottom-0 left-0 translate-x-[-20%] font-medium text-[100px]">
          <span
            className="text-[40px] sm:text-[50px] xl:text-[100px] font-bold text-white"
            style={{
              WebkitTextStroke: "2px white",
              WebkitTextFillColor: "black",
            }}
          >
            {index}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemTrending;
