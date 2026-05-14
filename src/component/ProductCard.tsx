import { Link } from "react-router-dom";
import { Product } from "../types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="productCard">
      <img className="prdImg" src={product.images[0]} alt="" width="150" />
      <div className="prdBody">
        <h4 className="prdTitle">{product.title}</h4>
        <p className="prdDes">${product.price}</p>
        <Link className="prdLink" to={`/product/${product.id}/details`}>View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
