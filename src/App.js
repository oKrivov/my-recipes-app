import { useEffect, useState } from "react";
import "./App.css";
import RecipeCard from "./RecipeCard";
import SearchIcon from "./search.svg";

function App() {
  const APP_ID = "ab06e39f";
  const APP_KEY = "4a08a24cab74bcb0d295bd58740a09c2";
  const API_URL = `https://api.edamam.com/search?q=`;

  // `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipes, setRecipes] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState("");

  const getRecipes = async (title) => {
    const response = await fetch(
      `${API_URL}${title}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    setSearchRecipe("");
  };

  // useEffect(() => {
  //   searchRecipes('')
  // }, [])

  // console.log(recipes);

  return (
    <div className="app">
      <h1>Search recipe</h1>

      <div className="search">
        <input
          value={searchRecipe}
          onChange={(e) => setSearchRecipe(e.target.value)}
          placeholder="Search for recipe"
        />
        <img onClick={() => getRecipes(searchRecipe)} src={SearchIcon} />
      </div>

      <div className="container">
        {recipes.length > 0 ? (
          recipes.map((recipe) => <RecipeCard recipe={recipe.recipe} />)
        ) : (
          <h3>No found recipes</h3>
        )}
      </div>
    </div>
  );
}

export default App;
