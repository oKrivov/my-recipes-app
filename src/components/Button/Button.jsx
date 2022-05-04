import { Link } from 'react-router-dom';
import s from './Button.module.css'

const Button = ({name,link = '/'}) => {
  return (
    <div className={s.btn}>
      <Link to={link} className={s.btn_link}>{name}</Link>
    </div>
  );
};

export default Button;