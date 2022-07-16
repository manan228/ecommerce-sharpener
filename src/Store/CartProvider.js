import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../Login/auth-context";
import CartContext from "../Store/cart-context";

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);

  const [cartElements, setCartElement] = useState([]);
  const formattedEmail = authCtx.email.replace(/[^a-zA-Z0-9]/g, "");

  useEffect(() => {

    const obj = {
      elements: cartElements,
    };

    axios.get(`https://crudcrud.com/api/697618ab1f964d6f8533f7b21673a7b8/cart${formattedEmail}`).then(res => {
      
    if(res.data.length !== 0) {
      
      const id = res.data[0]._id;
      axios.put(`https://crudcrud.com/api/697618ab1f964d6f8533f7b21673a7b8/cart${formattedEmail}/${id}`,obj).then(res => console.log(res));
    } else {
      
      axios.post(`https://crudcrud.com/api/697618ab1f964d6f8533f7b21673a7b8/cart${formattedEmail}`,obj).then(res => console.log(res));
    }
    });
  }, [cartElements]);

  const addToCartElement = (element) => {
    element = { ...element, quantity: 1 };

    const isThere = cartElements.find((item) => item.title == element.title);

    if (isThere) {
      element = { ...element, quantity: isThere.quantity + 1 };
      setCartElement((prevState) => [
        ...prevState.filter((el) => el.title != element.title),
        element,
      ]);
    } else {
      setCartElement((prevState) => [...prevState, element]);
    }
  };

  const cartCtx = {
    items: cartElements,
    addElement: addToCartElement,
    userEmail: formattedEmail
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
