import './App.css';
import CartProvider from './CartProvider';
import Footer from './Footer';
import Headers from './Headers';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <Headers />
      <Products />
      <Footer />
      </ CartProvider>
    </div>
  );
}

export default App;
