import { useContext, useEffect } from "react";
import { GlobalContext } from "../Context";
import RecipeItem from "../RecipeItem";
import banner from "../../assets/banner.jpg";

const Home = () => {
  const { loading, recipeList, setRecipeList, setLoading } =
    useContext(GlobalContext);

  useEffect(() => {
    async function fetchInitialData() {
      setLoading(true);
      const response = await fetch(
        "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza"
      );
      const data = await response.json();
      console.log(data);
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
      }
    }
    fetchInitialData();
  }, []);
  return (
    <div>
      <div className="min-h-[500px] container mx-auto pt-5 pb-5 mb-5 relative">
        <img src={banner} className="w-full h-full absolute object-cover" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col  justify-center  backdrop-blur bg-black bg-opacity-50 text-white px-5 py-2">
          “If more of us valued food and cheer and song above hoarded gold, it
          would be a merrier world."
          <a href="/recipe" className="text-end mb-2">
            <button className="bg-white text-black px-4 py-1 mt-3  bg-opacity-50">
              Recipes
            </button>
          </a>
        </div>
      </div>

      <div className="container mx-auto pt-[40px]">
        <p className="text-center text-[24px] font-medium font-cursive"  style={{fontFamily:"cursive"}}>
          Our Recepies
        </p>
        <div className="container mx-auto flex flex-wrap justify-center gap-10 py-8">
          {loading ? (
            <span className="animate-spin delay-0 inline-block w-10 h-10 border-2 border-solid border-indigo-600 rounded-full"></span>
          ) : recipeList && recipeList.length > 0 ? (
            recipeList
              .slice(0, 6)
              .map((item) => <RecipeItem key={item.id} item={item} />)
          ) : (
            // Limit to top 6 items
            <p className="lg:text-3xl font-bold text-center">
              No Recipes Found. Try searching..
            </p>
          )}

         
        </div>
        {loading ? (
            <span className=""></span>
          ) : recipeList && recipeList.length > 0 ? (
            <a href="/recipe" className="flex justify-end mb-5 font-cursive"  style={{fontFamily:"cursive"}}>View More Recipes</a>
          ) : (
            // Limit to top 6 items
            <p className="lg:text-3xl font-bold text-center">
              No Recipes Found. Try searching..
            </p>
          )}
      </div>
    </div>
  );
};

export default Home;
