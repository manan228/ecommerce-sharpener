import './App.css';
import {Route} from 'react-router-dom';
import CartProvider from '../src/Store/CartProvider';
import Footer from './Footer';
import Headers from './Headers';
import About from './About/About';
import Store from '../src/Store/Store';
import Home from './Home/Home';
import ContactUs from './ContactUs/ContectUs';
import ProductDetails from '../src/Store/ProductDetails';
import Login from './Login/Login';
import AuthProvider from './Login/AuthProvider';
import { useContext } from 'react';
import AuthContext from './Login/auth-context';

function App() {

  const authCtx = useContext(AuthContext)
  console.log(authCtx)
  return (
    <div className="App">
      <AuthProvider>
      <CartProvider>
      <Headers />
        <Route path='/auth'><Login /></Route>
        <Route path="/home"><Home /></Route>
        {authCtx.isLogin && <Route path="/store"><Store /></Route>}
        <Route path="/about"><About /></Route>
        <Route path="/contactUs"><ContactUs /></Route>
        <Route path="/product/:productId"><ProductDetails /></Route>
      <Footer />
      </ CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
