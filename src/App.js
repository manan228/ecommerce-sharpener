import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import CartProvider from "../src/Store/CartProvider";
import Footer from "./Footer";
import Headers from "./Headers";
import Store from "../src/Store/Store";
import Home from "./Home/Home";
import Login from "./Login/Login";
import AuthProvider from "./Login/AuthProvider";
import PrivateRoute from "./PrivateRoute";
import React, { Suspense } from "react";

const ContactUs = React.lazy(() => import("./ContactUs/ContectUs"));
const ProductDetails = React.lazy(() => import("../src/Store/ProductDetails"));
const About = React.lazy(() => import("./About/About"));

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <Headers />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact>
                <Redirect to="/home" />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <PrivateRoute path="/store" exact>
                <Store />
              </PrivateRoute>
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
          </Suspense>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
