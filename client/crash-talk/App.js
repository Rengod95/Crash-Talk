import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./src/view/pages/Login";
import Register from "./src/view/pages/Register";
import Home from "./src/view/pages/Home";
import Chat from "./src/view/pages/Chat";
import "./App.css";
import { AuthContextProvider } from "./src/stores/auth-context";

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/chat"} element={<Chat />}></Route>
          <Route path={"/register"} element={<Register />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
