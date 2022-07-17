import { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const [emailId, setEmailId] = useState("");

  let isLogin;

  const loginHandler = (idToken, email) => {
    setToken(idToken);
    setEmailId(email);
  };

  const authContext = {
    token: token,
    isLogin: token,
    login: loginHandler,
    email: emailId,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
