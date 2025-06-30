import axios from "axios";
import type { CreateProductProps, Product } from "../types/product.type";

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = () => axios.get(`${BASE_URL}/products`);

export const getCategories = () =>
  axios.get<string[]>(`${BASE_URL}/products/categories`);

export const getProductsByCategory = (category: string) =>
  axios.get(`${BASE_URL}/products/category/${category}`);

export const addProduct = async (productData: CreateProductProps) => {
  const response = await axios.post<Product>(
    `${BASE_URL}/products`,
    productData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};
