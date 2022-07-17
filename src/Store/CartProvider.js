import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../Login/auth-context";
import CartContext from "../Store/cart-context";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);

  const [cartElements, setCartElement] = useState([]);
  const formattedEmail = authCtx.email.replace(/[^a-zA-Z0-9]/g, "");

  useEffect(() => {
    const obj = {
      elements: cartElements,
    };

    axios
      .get(
        `https://crudcrud.com/api/de464932a2514ac1904f679a4cbbfad3/cart${formattedEmail}`
      )
      .then((res) => {
        if (res.data.length !== 0) {
          const id = res.data[0]._id;
          axios
            .put(
              `https://crudcrud.com/api/de464932a2514ac1904f679a4cbbfad3/cart${formattedEmail}/${id}`,
              obj
            )
            .then((res) => console.log(res));
        } else {
          axios
            .post(
              `https://crudcrud.com/api/de464932a2514ac1904f679a4cbbfad3/cart${formattedEmail}`,
              obj
            )
            .then((res) => console.log(res));
        }
      });
  }, [cartElements, formattedEmail]);

  const addToCartElement = (element) => {
    element = { ...element, quantity: 1 };

    const isThere = cartElements.find((item) => item.title === element.title);

    if (isThere) {
      element = { ...element, quantity: isThere.quantity + 1 };
      setCartElement((prevState) => [
        ...prevState.filter((el) => el.title !== element.title),
        element,
      ]);
    } else {
      setCartElement((prevState) => [...prevState, element]);
    }
  };

  const cartCtx = {
    items: cartElements,
    addElement: addToCartElement,
    userEmail: formattedEmail,
    allProducts: productsArr,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
