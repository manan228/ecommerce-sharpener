import { useContext } from "react";
import { Link } from "react-router-dom";
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

const Music = () => {
  const cartCtx = useContext(CartContext);

  return (
    <>
      <h1>Music</h1>
      <section>
        {productsArr.map((music) => {
          return (
            <>
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
            </>
          );
        })}
      </section>
    </>
  );
};

export default Music;