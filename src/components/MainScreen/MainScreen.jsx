import Button from '../Button/Button';
import s from './MainScreen.module.css';

const MainScreen = (props) => {
  return (
    <div className={s.mainScreen}>
      <h1>Find Your Inspiration</h1>
      <Button link='/searchPage' name="Let's find"/>
    </div>
  );
};

export default MainScreen;