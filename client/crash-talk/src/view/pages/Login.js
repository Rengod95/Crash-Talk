import React, { useContext, useState } from "react";
import Button from "../components/UI/Button";
import classes from "./Login.module.css";
import { AuthContext } from "../../stores/auth-context";
import { Link } from "react-router-dom";
import GV from "../../stores/global_variables";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const [loginData, setLoginData] = useState(GV.getDefaultLoginForm()); // input 값 관리를 위한 상태

  const inputHandler = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    authCtx.authHandler(GV.getHeaders().login, loginData);
    setLoginData(GV.getDefaultLoginForm);
  };

  return (
    <div className={classes.container}>
      <div className={`${classes.form} ${classes.signInContainer}`}>
        <form onSubmit={loginSubmitHandler}>
          <h1>SIGN IN</h1>
          <div className={classes.socialContainer}>
            <a href="/Users/in/Documents/CrashTalk/Crash-Talk/client/crash-talk/src/view/pages"></a>
            <a href="/Users/in/Documents/CrashTalk/Crash-Talk/client/crash-talk/src/view/pages"></a>
          </div>
          <input
            id={"email"}
            type="email"
            placeholder={"User Email"}
            onChange={inputHandler}
          />
          <input
            id={"password"}
            type="password"
            placeholder={"Password"}
            onChange={inputHandler}
          />
          <a href="/Users/in/Documents/CrashTalk/Crash-Talk/client/crash-talk/src/view/pages/Register">
            Forgot your password?
          </a>
          <Button type={"submit"}>SIGN IN</Button>
        </form>
      </div>
      <div className={classes.overlayContainer}>
        <div className={classes.overlay}>
          <div className={`${classes.overlayPanel} ${classes.overlayRight}`}>
            <h1>SIGN UP</h1>
            <p>Sign up here if you don't have account.</p>
            <Link to={"/register"}>
              <Button>SIGN UP</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
