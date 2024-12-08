import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

// Fetch all products
export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data; // Returns an array of products
};

// Fetch a single product by ID
export const fetchProduct = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data; // Returns a single product object
};
