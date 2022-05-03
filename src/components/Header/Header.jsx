import Button from "./../Button/Button";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={s.header}>
      <a className={s.logo}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1226/1226446.png?w=740"
          alt="logo"
        />
      </a>
      <div className={s.buttons}>
        <Button />
        <Button />
      </div>
    </div>
  );
};

export default Header;
