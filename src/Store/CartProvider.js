import { useState } from "react";
import CartContext from "../Store/cart-context";

const CartProvider = (props) => {
  const [cartElements, setCartElement] = useState([]);

  const addToCartElement = (element) => {
    console.log(`element`, element)
    if (cartElements.length === 0) {
      console.log(`0 element if`)
      setCartElement([...cartElements, { ...element, quantity: 1 }]);
    } else {
      cartElements.map((item) => {
        console.log(`else item`, item)
        if (item.title === element.title) {
          console.log(`inside else if`, item)
          item.quantity += 1;
          setCartElement((prevState) => [...prevState.filter(el => el.id !== item.id), item])
          // return setCartElement([
          //   ...cartElements,
          //   { ...element, quantity: item.quantity + 1 },
          // ]);
        } else {
          console.log(`else else item`, item)
          // setCartElement((prevState) => [...prevState, item])
          return setCartElement([...cartElements, { ...element, quantity: 1 }]);
        }
      });
    }
  };

  console.log(`cartElement`, cartElements)

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
