import { useState } from "react";
import CartContext from "../Store/cart-context";

const CartProvider = (props) => {
  const [cartElements, setCartElement] = useState([]);
  console.log(`cart element`, cartElements);

  const addToCartElement = (element) => {
    console.log(element);
    if (cartElements.length === 0) {
      setCartElement([...cartElements, { ...element, quantity: 1 }]);
    } else {
      cartElements.map((item) => {
        // console.log(`map`)

        if (item.title === element.title) {
          item.quantity += 1;
          console.log(item.quantity)
          return setCartElement((prevState) => [
            ...prevState.filter((el) =>
              el.title !== item.title ? true : item
            ),
          ]);
        } else {
          console.log(`else else item`, item);
          setCartElement((prevState) => [
            ...prevState.filter((el) =>
              el.title !== item.title ? true : item
            ),
          ]);
          // setCartElement((prevState) => [...prevState, item])
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
