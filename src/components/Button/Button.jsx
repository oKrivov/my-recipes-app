import s from './Button.module.css'

const Button = (props) => {
  return (
    <div className={s.btn}>
      <a href="" className={s.btn_link}>Click</a>
    </div>
  );
};

export default Button;