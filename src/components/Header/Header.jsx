import Button from './../Button/Button';
import s from './Header.module.css';


const Header = (props) => {
  return (
    <div className={s.header}>
      <a className={s.logo}>
        <img src="" alt="logo"/>
      </a>
      <div className={s.buttons}>
        <Button/>
        <Button/>
      </div>
    </div>
  );
};

export default Header;