import React, { useState } from "react";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);

  return isLogin ? (
    <LoginPage onSwitch={() => setIsLogin(false)} />
  ) : (
    <SignupPage onSwitch={() => setIsLogin(true)} />
  );
};

export default AuthPages;
