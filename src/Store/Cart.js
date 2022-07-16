import { useContext } from "react";
import CartContext from "./cart-context";
import "./Cart.module.css";

const Cart = (props) => {

  return (
    <section>
      <button onClick={props.onXClick}>x</button>
      <div>Cart</div>
      <div>
        <span>Item</span>
        <span>Price</span>
        <span>Quantity</span>
      </div>
      <div>
        {props.data.map((item) => {
          return (
            <div>
              <span>{item.title}</span>
              <span>{item.price}</span>
              <span>{item.quantity}</span>
              <button>Remove</button>
            </div>
          );
        })}
      </div>
      <div>Total $100</div>
      <button>Purchase</button>
    </section>
  );
};

export default Cart;
