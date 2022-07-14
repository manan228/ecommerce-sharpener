import './App.css';
import {Route} from 'react-router-dom';
import CartProvider from './CartProvider';
import Footer from './Footer';
import Headers from './Headers';
import About from './About';
import Store from './Store';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <Headers />
        <Route path="/home"><Home /></Route>
        <Route path="/store"><Store /></Route>
        <Route path="/about"><About /></Route>
        <Footer />
      </ CartProvider>
    </div>
  );
}

export default App;
