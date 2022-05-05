import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import s from "./Search.module.css";
import SearchIcon from "./../../search.svg";

import { useRecipeFetch } from "../../hooks/useRecipeFetch";

const Search = (props) => {
  const {
    recipes,
    searchRecipe,
    setSearchRecipe,
    getRecipes,
  } = useRecipeFetch();

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
    </div>
  );
};

export default Search;
