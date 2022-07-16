import axios from "axios";
import { useContext, useEffect, useRef } from "react";
import { Redirect, useHistory } from "react-router-dom";
import AuthContext from "./auth-context";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();
  const authCtx = useContext(AuthContext);

  // useEffect(() => {

  //   console.log(authCtx.isLogin)
  //   if(authCtx.isLogin) {
  //     <Redirect to="/store" />
  //   }
  // }, [authCtx.isLogin])

  const onLoginSubmitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAMS1m2_2WgT8zRzPPjVbiC7Oibr9Zzzy0",
        {
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }
      );

      const token = response.data.idToken;
      authCtx.login(token);
      console.log(authCtx.isLogin)
      history.replace('/store')
    } catch (error) {
      console.log(error);
    }

    console.log(`before redirect to store`);

    // <Redirect to='/store' />
    // history.replace('/store')
    console.log(`inside submit handler`);
  };

  return (
    <>
      <form onSubmit={onLoginSubmitHandler}>
        <div>
          <span>Email</span>
          <input type="text" ref={emailInputRef}></input>
        </div>
        <div>
          <span>Password</span>
          <input type="text" ref={passwordInputRef}></input>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};

export default Login;
