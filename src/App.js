import './App.css';
import {Route} from 'react-router-dom';
import CartProvider from './CartProvider';
import Footer from './Footer';
import Headers from './Headers';
import About from './About';
import Store from './Store';
import Home from './Home';
import ContactUs from './ContectUs';
import ProductDetails from './ProductDetails';
import Login from './Login';
import AuthProvider from './AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <CartProvider>
      <Headers />
        <Route path='/auth'><Login /></Route>
        <Route path="/home"><Home /></Route>
        <Route path="/store"><Store /></Route>
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
