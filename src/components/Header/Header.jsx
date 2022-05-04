import { Link } from "react-router-dom";
import Button from "./../Button/Button";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={s.header}>
      <Link to="/" className={s.logo}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1226/1226446.png?w=740"
          alt="logo"
        />
      </Link>
      <div className={s.buttons}>
        <Button link="/singIn" name="SingIn"/>
        <Button link="/singUp" name="SingUp"/>
      </div>
    </div>
  );
};

export default Header;
