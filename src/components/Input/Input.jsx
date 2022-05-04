import s from './Input.module.css'

const Input = ({type = 'text', placeholder = 'Enter some text', value}) => {
  return (
    <div className={s.input}>
      <input type={type} placeholder={placeholder} value={value}/>
    </div>
  );  
};

export default Input;