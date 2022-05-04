import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import s from "./Search.module.css";
import SearchIcon from "./../../search.svg";
import FullRecipe from "../RecipeCard/FullRecipe/FullRecipe";

// `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

const Search = (props) => {
  const APP_ID = "ab06e39f";
  const APP_KEY = "4a08a24cab74bcb0d295bd58740a09c2";
  const API_URL = `https://api.edamam.com/search?q=`;

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
    <div className={s.searchPage}>
      
      <h1>Search recipe</h1>

      <div className={s.search}>
        <input
          value={searchRecipe}
          onChange={(e) => setSearchRecipe(e.target.value)}
          placeholder="Search for recipe"
        />
        <img onClick={() => getRecipes(searchRecipe)} src={SearchIcon} />
      </div>

      <div className={s.container}>
        {recipes.length > 0 ? (
          recipes.map((recipe) => <RecipeCard recipe={recipe.recipe} />)
        ) : (
          <h3>No found recipes</h3>
        )}
      </div>

          <FullRecipe/>

    </div>
  );
};

export default Search;
