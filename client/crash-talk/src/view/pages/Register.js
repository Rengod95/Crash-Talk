import React, { useRef, useState } from "react";
import classes from "./Register.module.css";
import Button from "../components/UI/Button";
import { useContext } from "react";
import { AuthContext } from "../../stores/auth-context";
import GV from "../../stores/global_variables";

const Register = () => {
  const authCtx = useContext(AuthContext);
  const [registerData, setRegisterData] = useState(GV.getDefaultUserForm());
  const formRefer = useRef();

  const inputChangeHandler = (event) => {
    setRegisterData({ ...registerData, [event.target.id]: event.target.value });
    console.log(registerData);
  };

  const registerSubmitHandler = (event) => {
    event.preventDefault();
    authCtx.authHandler(GV.getHeaders().register, registerData);
    console.log(formRefer.current);
  };

  return (
    <div className={classes.user}>
      <header className={classes.user__header}>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg"
          alt=""
        />
      </header>
      <form
        className={classes.form}
        ref={formRefer}
        onSubmit={registerSubmitHandler}
      >
        <div className={classes.formNo}>
          <input
            id={"name"}
            type="text"
            placeholder="Name"
            className={classes.formInput}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={classes.formNo}>
          <input
            id={"nickname"}
            type="text"
            placeholder="NickName"
            className={classes.formInput}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={classes.form__group}>
          <input
            id={"email"}
            type="email"
            placeholder="Email"
            className={classes.formInput}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={classes.form__group}>
          <input
            id={"password"}
            type="password"
            placeholder="Password"
            className={classes.formInput}
            onChange={inputChangeHandler}
          />
        </div>
        <Button className={classes.btn} type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
