import React, { useRef, useState } from "react";
import Button from "../components/UI/Button";
import { useContext } from "react";
import { AuthContext } from "../../stores/auth-context";
import GV from "../../stores/CONSTANTS/global_variables";
import action from "../../actions/action";

const Register = () => {
  const authCtx = useContext(AuthContext);
  const [registerData, setRegisterData] = useState(GV.getDefaultUserForm());

  const inputChangeHandler = (event) => {
    setRegisterData({ ...registerData, [event.target.id]: event.target.value });
    console.log(registerData);
  };

  const registerSubmitHandler = (event) => {
    event.preventDefault();
    action.callRegisterAction(registerData); // 액션 발생 및 액션 객체 데이터 전달
    authCtx.loginStatusHandler(action.dispatch()); // 디스패치 함수 실행 결과로 반환된 프라미스 객체를 인수로 전달
  };

  return (
    <div className={""}>
      <header className={""}>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg"
          alt=""
        />
      </header>
      <form className={""} onSubmit={registerSubmitHandler}>
        <div className={""}>
          <input
            id={"name"}
            type="text"
            placeholder="Name"
            className={""}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={""}>
          <input
            id={"nickname"}
            type="text"
            placeholder="NickName"
            className={""}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={""}>
          <input
            id={"email"}
            type="email"
            placeholder="Email"
            className={""}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={""}>
          <input
            id={"password"}
            type="password"
            placeholder="Password"
            className={""}
            onChange={inputChangeHandler}
          />
        </div>
        <Button className={""} type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
