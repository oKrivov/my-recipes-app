import s from "./RecipeCard.module.css";
import { Link } from "react-router-dom";

const RecipeCard = ({ link, image, title, id }) => {
  return (
    <div className={s.recipe}>
      <Link to={link}>
        <img src={image} alt={title} />
        <div className={s.recipe_info}>
          {/* <p>{Math.floor(props.recipe.calories)} kcal</p> */}
          {/* <span>{props.recipe.totalTime} min</span>
           */}
          <h3>{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
