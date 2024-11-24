import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Favorites from "./Components/Favorites";
import Recipe from "./Components/Recipes";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-item/:id/details" element={<Details />} />
          <Route path="/recipe" element={<Recipe/>} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
