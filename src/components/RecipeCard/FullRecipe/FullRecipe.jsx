import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import s from "./FullRecipe.module.css";

const FullRecipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className={s.fullRecipe}>
      <div className={s.container}>
        <div className={s.image}>
          <img src={details.image} alt={details.title}></img>
        </div>
        <div className={s.info}>
          <h2 className={s.title}>{details.title}</h2>
          {/* <ul className={s.ingredients}>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default FullRecipe;
