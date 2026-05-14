import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1";

export const getProducts = async (categoryIds?: number[]) => {
  if (!categoryIds || categoryIds.length === 0) {
    const res = await axios.get(`${BASE_URL}/products`);
    return res.data;
  }

  // Multiple filters → multiple API calls
  const results = await Promise.all(
    categoryIds.map((id) =>
      axios.get(`${BASE_URL}/products/?categoryId=${id}`),
    ),
  );

  return results.flatMap((r) => r.data);
};

export const getCategories = async () => {
  const res = await axios.get(`${BASE_URL}/categories`);
  return res.data;
};

export const fetchProductById = async (id: number) => {
  const res = await axios.get(`${BASE_URL}/products/${id}`);
  return res.data;
};