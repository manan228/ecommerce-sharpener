import './App.css';
import {Route} from 'react-router-dom';
import CartProvider from './CartProvider';
import Footer from './Footer';
import Headers from './Headers';
import Products from './Products';
import About from './About';

function App() {
  return (
    <div className="App">
      {/* <ReactBrowser> */}
      <Route path="/about">
        <About />
      </Route>
      <Route path="/home">
      <CartProvider>
      <Headers />
      <Products />
      <Footer />
      </ CartProvider>
      </Route>
      {/* </ReactBrowser> */}
    </div>
  );
}

export default App;
