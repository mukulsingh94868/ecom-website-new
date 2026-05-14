import { useEffect, useState } from "react";
import { getCategories, getProducts } from "../api/productApi";
import ProductCard from "../component/ProductCard";
import { Product } from "../types";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selected, setSelected] = useState<number[]>([]);

  const fetchData = async () => {
    try {
      const data = await getProducts(selected);
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleCategory = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  useEffect(() => {
    fetchData();
  }, [selected]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="homeContainer">
      <h2 className="containerTitle">Products</h2>

      <div className="checkBoxContainer">
        {categories?.map((cat) => (
          <label key={cat?.id} className="labelGroup">
            <input type="checkbox" onChange={() => toggleCategory(cat?.id)} />
            {cat?.name}
          </label>
        ))}
      </div>

      <div className="prdLayout">
        {products?.length > 0 ? (
          products?.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p className="noFound">No product found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
