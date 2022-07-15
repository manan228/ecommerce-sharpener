import { useState } from "react";
import CartContext from "../Store/cart-context";

const CartProvider = (props) => {
  const [cartElements, setCartElement] = useState([]);

  const addToCartElement = (element) => {
    if (cartElements.length === 0) {
      setCartElement([...cartElements, { ...element, quantity: 1 }]);
    } else {
      cartElements.map((item) => {
        if (item.title === element.title) {
          return setCartElement([
            ...cartElements,
            { ...element, quantity: item.quantity + 1 },
          ]);
        } else {
          return setCartElement([...cartElements, { ...element, quantity: 1 }]);
        }
      });
    }
  };

  const cartCtx = {
    items: cartElements,
    addElement: addToCartElement,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
