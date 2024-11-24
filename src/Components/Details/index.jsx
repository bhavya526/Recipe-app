import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Context";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import receipeTop from "../../assets/receipeTop.jpg";
import Checkbox from "react-custom-checkbox";
import checkboximg from "../../assets/checkbox.png";

const Details = () => {
  const { id } = useParams();
  const { favoritesList, recipeDetails, setRecipeDetails, addFavorite } =
    useContext(GlobalContext);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      if (data?.data) {
        setRecipeDetails(data?.data);
      }
    }
    fetchData();
  }, []);

  const ingredients = [
    {
      quantity: "1",
      unit: "cup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus rerum, ad odit iure mollitia modi molestias. Unde reiciendis dolor est earum ducimus quaerat cupiditate aperiam, veritatis necessitatibus, expedita in!",
    },
    {
      quantity: "2",
      unit: "tbsp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus rerum, ad odit iure mollitia modi molestias. Unde reiciendis dolor est earum ducimus quaerat cupiditate aperiam, veritatis necessitatibus, expedita in!",
    },
    {
      quantity: "1/2",
      unit: "tsp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus rerum, ad odit iure mollitia modi molestias. Unde reiciendis dolor est earum ducimus quaerat cupiditate aperiam, veritatis necessitatibus, expedita in!",
    },
    {
      quantity: "1",
      unit: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus rerum, ad odit iure mollitia modi molestias. Unde reiciendis dolor est earum ducimus quaerat cupiditate aperiam, veritatis necessitatibus, expedita in!",
    },
  ];

  return (
    <div>
      <div className=" container mx-auto pt-5 pb-5  relative">
        <div className="relative">
          <img
            src={receipeTop}
            className="w-full h-[300px] object-cover mb-5"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col  justify-center  backdrop-blur bg-black bg-opacity-50 text-white px-5 py-2">
          {recipeDetails?.recipe?.publisher}
        </div>
      </div>

      <div
        className="container mx-auto text-center"
        style={{ fontFamily: "cursive" }}
      >
        <h3 className="font-bold text-xl truncate text-black mb-[40px]">
          {recipeDetails?.recipe?.title}
        </h3>
        <div className="h-96 overflow-hidden rounded-xl group px-[20%]">
          <img
            src={recipeDetails?.recipe?.image_url}
            alt="item-details"
            className="w-full h-full object-cover block  rounded-xl group-hover:scale-105 duration-300"
          />
        </div>
        <div className=" px-[20px] flex flex-col gap-3">
          <div className=" flex justify-between mb-5">
            <div>
              {" "}
              <button
                onClick={() => addFavorite(recipeDetails?.recipe)}
                className="text-sm rounded-lg mt-5   p-3 px-8 font-medium tracking-wider bg-indigo-700 text-white flex gap-1 justify-center items-center"
              >
                {favoritesList &&
                favoritesList.length > 0 &&
                favoritesList.findIndex(
                  (item) => item.id == recipeDetails?.recipe?.id
                ) !== -1 ? (
                  <FaStarHalfStroke />
                ) : (
                  <FaStar />
                )}
              </button>
            </div>
          </div>

          <div className=" md:flex md:justify-between  mb-5">
            <div className="md:w-1/2 w-full">
              <span className="text-xl text-left font-semibold text-black mb-5">
                Follow the steps to make this delicious dish:
              </span>

              <ul className=" flex flex-col list-decimal gap-3 mt-2 list-none">
                {ingredients.map((item, index) => (
                  <li
                    key={index}
                    className="text-black m-1 list-item text-left"
                  >
                    <span>
                      {"-  "}
                      {item.quantity} {item.unit}
                    </span>{" "}
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-left">
              <span className="text-xl text-left font-semibold text-black ">
                Ingredients
              </span>
              <ul className=" flex flex-col list-decimal gap-3 mt-2 list-none">
                {recipeDetails?.recipe?.ingredients?.map((item, index) => {
                  return (
                    <div className="flex">
                      <Checkbox
                        checked={false}
                        icon={
                          <img src={checkboximg} style={{ width: 24 }} alt="" />
                        }
                        borderColor="#D7C629"
                        borderRadius={10}
                        size={30}
                      />
                      <li
                        key={index}
                        className="text-black m-1 list-item text-left"
                      >
                        <span>
                          {" "}
                          {item.quantity} {item.unit}
                        </span>
                        <span>{item.description}</span>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
