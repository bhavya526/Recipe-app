import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div className="flex flex-col w-80 overflow-hidden  rounded-md gap-5 ">
  <div
  className="h-[300px] 2xl:w-[300px]  md:w-full flex justify-center items-center overflow-hidden rounded-sm group 2xl:bg-[#378337]"
  style={{ borderBottom: "6px solid #378337" }}
>
  <Link to={`/recipe-item/${item?.id}/details`}>
    <img
      src={item?.image_url}
      alt="recipe-item"
      className="h-[300px] 2xl:w-[300px]  md:w-full block object-cover transform transition-transform duration-300 2xl:group-hover:scale-90 md:group-hover:scale-0"
    />
  </Link>
</div>

      <div className="">
        <span className="text-md  font-medium ">
          <Link
            to={`/recipe-item/${item?.id}/details`}
            style={{ fontFamily: "cursive" }}
            className=" rounded-lg  text-[18px]  uppercase  px-8 font-medium tracking-wider  text-black white flex gap-1 justify-center items-center"
          >
            {item?.publisher}
          </Link>
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.tittle}
        </h3>
        <span className="text-md  font-medium ">{item?.descrption}</span>
      </div>
    </div>
  );
};

export default RecipeItem;
