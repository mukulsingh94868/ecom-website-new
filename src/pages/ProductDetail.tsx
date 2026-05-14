import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../api/productApi";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const productData = await fetchProductById(Number(id));
        setProduct(productData);
      } catch (err) {
        setError("Failed to load product");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadProduct();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found</p>;
  console.log("product123", product);
  return (
    <div className="homeContainer">
      <Link to="/" className="backLink">
        Back to Home
      </Link>
      <div className="prdDetailRow">
        <div className="prdDetailRow_imgCol">
          <img src={product.images[0]} alt="" width="200" />
        </div>
        <div className="prdDetailRow_DesCol">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <button onClick={() => addToCart(product)}>Add to My Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
