import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Store/cart-context";

const Music = () => {
  const cartCtx = useContext(CartContext);

  return (
    <>
      <h1>Music</h1>
      <section>
        {cartCtx.allProducts.map((music) => {
          return (
            <div key={music.title}>
              <div>
                <h2>{music.title}</h2>
                <Link to={`/product/${music.title}`}>
                  <img src={music.imageUrl} alt={music.title} />
                </Link>
              </div>
              <span>${music.price}</span>
              <button onClick={() => cartCtx.addElement(music)}>
                Add To Cart
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Music;
