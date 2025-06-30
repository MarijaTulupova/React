import { createContext, useContext, useState, type ReactNode } from "react";

import type { Product } from "../types/product.type";
import { getAllProducts, getProductsByCategory } from "../services/api";

type ProductsContextType = {
  products: Product[];
  error: string | undefined;
  isLoading: boolean;
  fetchProducts: (categoryName?: string) => Promise<void>;
  storeNewProduct: (newProduct: Product) => void;
};

type ProductsProviderProps = {
  children: ReactNode;
};

const ProdcutsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const fetchProducts = async (categoryName?: string) => {
    setIsLoading(true);
    setError(undefined);

    try {
      if (categoryName) {
        const res = await getProductsByCategory(categoryName);
        const newProductsBySelectedCategory = newProducts.filter(
          (product) => product.category === categoryName
        );
        setProducts([...res.data, ...newProductsBySelectedCategory]);
      } else {
        const res = await getAllProducts();
        setProducts([...res.data, ...newProducts]);
      }
    } catch (error) {
      console.error("ERROR HAPPENED", error);
      setError("Failed to fetch products.");
    } finally {
      setIsLoading(false);
    }
  };

  const storeNewProduct = (newProduct: Product) => {
    setNewProducts([...newProducts, newProduct]);
  };

  return (
    <ProdcutsContext.Provider
      value={{
        products,
        isLoading,
        error,
        fetchProducts,
        storeNewProduct,
      }}
    >
      {children}
    </ProdcutsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = (): ProductsContextType => {
  const context = useContext(ProdcutsContext);

  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return context;
};
