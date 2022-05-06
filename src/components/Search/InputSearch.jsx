import s from "./Search.module.css";
import {useNavigate} from 'react-router-dom';
import SearchIcon from "./../../search.svg";
import { useState, useEffect } from "react";

const InputSearch = () => {

  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/search/' + input);
  }


  return (
    <form onSubmit={submitHandler} className={s.search}>
      {/* <img onClick={() => getRecipes(searchRecipe)} src={SearchIcon} /> */}
      <img src={SearchIcon} />
        <input
          onChange={(e) => setInput(e.target.value) }
          value={input}
          // placeholder="Search for recipe"
        />
        <p></p>
      </form >
  )
}

export default InputSearch
