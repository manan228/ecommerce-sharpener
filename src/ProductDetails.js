import { useParams } from "react-router-dom"

const ProductDetails = () => {

    const params = useParams();

    return (<div>Product Details Page
        <div>{params.productId}</div>
    </div>)
}

export default ProductDetails