import s from './RecipeCard.module.css'

const RecipeCard = (props) => {
  return (
    <div className={s.recipe}>
      <div>
        <img
          src={
            props.recipe.image !== "N/A"
              ? props.recipe.image
              : "https://via.placeholder.com/400"
          }
          alt={props.recipe.label}
        />
      </div>

      <div className={s.recipe_info}>
      <p>{Math.floor(props.recipe.calories)} kcal</p>
        <span>{props.recipe.totalTime} min</span>
        <h3>{props.recipe.label}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;
