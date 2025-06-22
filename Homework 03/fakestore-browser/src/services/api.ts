import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = () => axios.get(`${BASE_URL}/products`);

export const getCategories = () =>
  axios.get<string[]>(`${BASE_URL}/products/categories`);

export const getProductsByCategory = (category: string) =>
  axios.get(`${BASE_URL}/products/category/${category}`);
