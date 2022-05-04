import { Link } from "react-router-dom";
import s from "./FullRecipe.module.css";

const FullRecipe = ({
  image,
  title = "Some Title",
  ingredients,
  source = "",
}) => {
  return (
    <div className={s.fullRecipe}>
      <div className={s.container}>
        <div className={s.image}>
          <img src={image} alt=""></img>
        </div>
        <div className={s.info}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.ingredients}></p>
          <a href={source} className={s.source}></a>
        </div>
      </div>
    </div>
  );
};

export default FullRecipe;
