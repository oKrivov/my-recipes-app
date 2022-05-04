import Button from '../Button/Button';
import Input from '../Input/Input';
import s from './Registration.module.css'

const SingIn = (props) => {
  return (
    <div className={s.singIn}>
    <div className={s.container}>
    <h3 className="">SignIn</h3>
      <div className={s.inputs}>
        <Input
          type="email"
          // namebtn="Search!"
          placeholder="Enter your email"
        />
        <Input
          type="password"
          // namebtn="Search!"
          placeholder="Enter your password"
        />
      </div>
      <Button name="SingIn" link=''/>
    </div>
  </div>
  );
};

export default SingIn;