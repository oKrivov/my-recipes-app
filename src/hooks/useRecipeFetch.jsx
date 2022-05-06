import { useEffect, useState } from "react";

export const useRecipeFetch = () => {
  const APP_ID = "ab06e39f";
  const APP_KEY = "4a08a24cab74bcb0d295bd58740a09c2";
  const API_URL = `https://api.edamam.com/search?q=`;

  const [recipes, setRecipes] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState('');
  const [state, setState] = useState('');


  const getRecipes = async (title) => {
    const response = await fetch(
      `${API_URL}${title}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();

    setState((prev) => ({
      ...data,
    }));
    setRecipes(data.hits);
    setSearchRecipe('');
  };

  useEffect(() => {
    getRecipes('')
  }, [])






  return { recipes, searchRecipe, setSearchRecipe, getRecipes }
};
