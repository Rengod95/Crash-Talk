import React, { createContext, useState } from "react";
import GV from "./global_variables";
import requester from "./requester";

const defaultContext = {
  // 컨텍스트 훅 사용을 위한 스탠다드 객체 탬플릿
  isLoggedIn: undefined,
  loginUserStatus: {},
  authHandler: (header, authData) => {},
};

const defaultUser = GV.getDefaultUserForm();

export const AuthContext = createContext(defaultContext);
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태
  const [loginUserStatus, setLoginUserStatus] = useState(defaultUser); // 유저 정보에 대한 상태

  const authHandler = (header, authData) => {
    // auth Data는 header에 따라 다르게 전달됨
    if (header === "LOGOUT_USER") {
      // 로그아웃
      setLoginUserStatus(defaultUser);
      setIsLoggedIn(false);
      return;
    }
    try {
      //로그인 및 회원가입 리퀘스트
      const response = requester.postUserData(header, authData);
      const result = response.data; // data 에는 user:유저 정보, validity:회원가입 및 로그인 유효성을 가져야함

      if (result.validity) {
        setIsLoggedIn(result.validity);
        setLoginUserStatus(result.user);
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dynamicContext = {
    isLoggedIn: isLoggedIn,
    loginUserStatus: loginUserStatus,
    authHandler: authHandler,
  };

  return (
    <AuthContext.Provider value={dynamicContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
