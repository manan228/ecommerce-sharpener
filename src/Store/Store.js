import axios from "axios";
import Products from "./Products";
import { useContext, useState } from "react";
import CartButton from "./CartButton";
import Cart from "./Cart";
import CartContext from "../Store/cart-context";

const Store = () => {

  let totalQuantity = 0;
  const cartCtx = useContext(CartContext);

  const formattedEmail = cartCtx.userEmail
  const [showCart, setShowCart] = useState(false);
  const [receivedData, setReceivedData] = useState([])

  const onCartClickHander = async() => {

    const response = await axios.get(`https://crudcrud.com/api/de464932a2514ac1904f679a4cbbfad3/cart${formattedEmail}`);
    
    const data = response.data[0].elements
    
    setReceivedData(data)
    setShowCart(true);
  };

  const onXClickHandler = () => {
    setShowCart(false);
  };

  cartCtx.items.forEach(item => {
  
    totalQuantity += item.quantity
  })

  return (
    <>
      <CartButton onClick={onCartClickHander}></CartButton>
      <sup>{totalQuantity}</sup>
      {showCart && <Cart onXClick={onXClickHandler} data={receivedData} />}
      <Products />
    </>
  );
};

export default Store;
