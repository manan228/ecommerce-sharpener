import { useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "./cart-context";

const ProductDetails = () => {
  const cartCtx = useContext(CartContext);
  const params = useParams();

  const selectedProduct = cartCtx.allProducts.find(
    (item) => item.title == params.productId
  );

  return (
    <div>
      Product Details Page
      <div>
        <div>
          <div>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.title} />
          </div>
          {selectedProduct.title}
        </div>
        <div>{selectedProduct.price}</div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductDetails;
