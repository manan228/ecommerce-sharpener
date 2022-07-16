import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import CartProvider from "../src/Store/CartProvider";
import Footer from "./Footer";
import Headers from "./Headers";
import About from "./About/About";
import Store from "../src/Store/Store";
import Home from "./Home/Home";
import ContactUs from "./ContactUs/ContectUs";
import ProductDetails from "../src/Store/ProductDetails";
import Login from "./Login/Login";
import AuthProvider from "./Login/AuthProvider";
import { useContext } from "react";
import AuthContext from "./Login/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  // console.log(authCtx.isLogin);
  return (
    <div className="App">
      <AuthProvider>
        {/* {console.log(authCtx.isLogin)} */}
        <CartProvider>
        {console.log(authCtx.isLogin, `store 1234`)}
          <Headers />
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/store" exact>
          {authCtx.isLogin && <Store />}
          {/* {!authCtx.isLogin && <Redirect to='/auth' />} */}
          </Route>
            {/* <Route path="/store">
              <Store />
            </Route> */}
            <Route path="/auth">
              <Login />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contactUs">
              <ContactUs />
            </Route>
            <Route path="/product/:productId">
              <ProductDetails />
            </Route>
          </Switch>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
