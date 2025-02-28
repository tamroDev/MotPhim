import { FC } from "react";
import { Link } from "react-router-dom";

interface IItemTrending {
  src: string;
  slug: string;
  nameMovie: string;
  yearOfRelease: number;
}

const ItemTrending: FC<IItemTrending> = ({
  src,
  slug,
  nameMovie,
  yearOfRelease,
}) => {
  return (
    <Link
      to={`https://phimapi.com/phim/${slug}`}
      className="block w-[100%] transition-transform duration-[0.3s] hover:scale-[1.05] py-[0.5rem]"
    >
      <div
        style={{
          backgroundImage: `url(${src})`,
        }}
        className={`w-[90%] h-[110px] sm:h-[150px] xl:h-[300px] rounded-lg bg-no-repeat bg-cover bg-center mx-auto relative cursor-pointer flex justify-center items-center group`}
      >
        <div className="absolute inset-0 transition-all duration-[0.3s] group-hover:backdrop-blur-sm group-hover:bg-[#0000000d] rounded-lg"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            className="
              transition-all duration-300 
              group-hover:scale-100 scale-50 
              group-hover:opacity-100 opacity-0 
              group-hover:visible invisible
              size-[60px] rounded-full border-[3px] border-white 
              flex justify-center items-center"
          >
            <i className="fa-solid fa-play text-[30px]"></i>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col px-2 justify-center items-center hover:underline">
        <h1 className="line-clamp-1">{nameMovie}</h1>
        <span>{yearOfRelease}</span>
      </div>
    </Link>
  );
};

export default ItemTrending;
