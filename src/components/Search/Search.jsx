import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import s from "./Search.module.css";

import { useRecipeFetch } from "../../hooks/useRecipeFetch";
import InputSearch from "./InputSearch";
import { Link, useParams } from "react-router-dom";

const Search = (props) => {
  // const {
  //   recipes,
  //   searchRecipe,
  //   setSearchRecipe,
  //   getRecipes,
  // } = useRecipeFetch();

  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();

    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className={s.searchPage}>
      <h1>Search recipe</h1>
      <InputSearch />

      {searchedRecipes.map((item) => {
        return (
          <div key={item.id}>
            <RecipeCard
              link={"/recipe/" + item.id}
              image={item.image}
              title={item.title}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Search;

{
  /* <div className={s.search}>
        <input
          value={searchRecipe}
          onChange={(e) => setSearchRecipe(e.target.value)}
          placeholder="Search for recipe"
        />
        <img onClick={() => getRecipes(searchRecipe)} src={SearchIcon} />
      </div> */
}
{
  /* 
      <div className={s.container}>
        {recipes.length > 0 ? (
          recipes.map((recipe) => <RecipeCard recipe={recipe.recipe} />)
        ) : (
          <h3>No found recipes</h3>
        )}
      </div> */
}
