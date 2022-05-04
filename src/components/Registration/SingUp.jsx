import Button from '../Button/Button';
import Input from '../Input/Input';
import s from './Registration.module.css'

const SingUp = (props) => {
  return (
    <div className={s.singUp}>
      <div className={s.container}>
        <h3 className="">SingUp</h3>
        <div className={s.inputs}>
          <Input
            type="text"
            placeholder="Enter your name"
          />
          <Input
            type="email"
            placeholder="Enter your email"
          />
          <Input
            type="password"
            placeholder="Enter your password"
          />
          <Input
            type="password"
            placeholder="Confirm your password"
          />
        </div>
        <Button name="SingUp"/>
      </div>
    </div>
  );
};

export default SingUp;