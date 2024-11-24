import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../Context";
import { FaHome, FaSearch, FaStar, FaUtensils } from "react-icons/fa";
import close from "../../assets/x.svg";
import "./index.css";

const Navbar = () => {
  const { searchParams, setSearchParams, handleSubmit } =
    useContext(GlobalContext);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev); // Toggle the state
  };
  return (
    <div>
      <div className="navbarTop">
        <p>Welcome to recipeze</p>
      </div>

      <div class="searchData">
        <form onSubmit={handleSubmit}>
          <div className=" flex gap-2">
            <input
              type="text"
              name="search"
              placeholder="Search Something ..."
              className=" p-3 px-8 border-2  border-indigo-600 rounded-md outline-none lg:w-96 focus:shadow-red-200"
              onChange={(event) => setSearchParams(event.target.value)}
              value={searchParams}
            />
            <button
              type="submit"
              className=" bg-indigo-600 px-4 rounded-md text-white p-3"
            >
              <FaSearch />
            </button>
          </div>
        </form>
      </div>

      <nav className="flex justify-between container mx-auto py-8 flex-col lg:flex-row gap-5 lg:gap-0 items-center">
        <h2 className="text-2xl font-semibold">
          <ul className="flex gap-5">
            <li>
              <NavLink
                to={"/"}
                className="text-black hover:text-gray-700 duration-300"
              >
                <p class="receText">recipeze</p>
              </NavLink>
            </li>
          </ul>
        </h2>

        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `duration-300 flex gap-1 justify-center items-center ${
                  isActive
                    ? "px-2.5 py-1.5 text-white bg-[#378337] border-b-2 border-white"
                    : "hover:px-3 hover:py-2 hover:bg-[#4CAF50] hover:border-[#4CAF50]"
                }`
              }
            >
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                `duration-300 flex gap-1 justify-center items-center ${
                  isActive
                    ? "px-2.5 py-1.5 text-white bg-[#378337] border-b-2 border-white"
                    : "hover:px-3 hover:py-2 hover:bg-[#4CAF50] hover:border-[#4CAF50]"
                }`
              }
            >
              <FaUtensils />
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `text-black hover:text-gray-700 duration-300 flex gap-1 justify-center items-center ${
                  isActive
                    ? "px-2.5 py-1.5 text-white bg-[#378337] border-b-2 border-white"
                    : "hover:px-3 hover:py-2 hover:bg-[#fff] hover:text-[#378337] hover:border-[#4CAF50]"
                }`
              }
            >
              <FaStar />
              Favorites
            </NavLink>
          </li>
        </ul>

        <div className={`searchData ${isSearchOpen ? "open" : ""}`}>
          <div className="insideSearch">
            <form onSubmit={handleSubmit}>
              <div className=" flex pt-2 pb-2 pl-3 justify-start  md:justify-center">
                <input
                  type="text"
                  name="search"
                  placeholder="Search Something ..."
                  className=" p-2 px-8 border-0  outline-none w-40 md:w-96 focus:none"
                  onChange={(event) => setSearchParams(event.target.value)}
                  value={searchParams}
                  autoComplete="false"
                />
                <button
                  type="submit"
                  className="  bg-[#ececec] px-4  text-white p-3"
                >
                  <FaSearch className="text-black" />
                </button>
              </div>
            </form>
            <div className="close-Cancel" onClick={toggleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </div>
          </div>
        </div>

        <div className="searchIcon" onClick={toggleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
