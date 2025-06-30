import { createContext, useContext, useState, type ReactNode } from "react";
import { getCategories } from "../services/api";

type CategoriesContextType = {
  categories: string[];
  isLoading: boolean;
  error: string | undefined;
  fetchCategories: () => Promise<void>;
};

type CategoriesProviderProps = {
  children: ReactNode;
};

const CategoriesContext = createContext<CategoriesContextType | undefined>(
  undefined
);

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const fetchCategories = async () => {
    setIsLoading(true);
    setError(undefined);
    try {
      const res = await getCategories();
      setCategories(res.data);
    } catch (error) {
      console.error("ERROR HAPPENED", error);
      setError("Failed to fetch categories.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CategoriesContext.Provider
      value={{ categories, isLoading, error, fetchCategories }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCategories = (): CategoriesContextType => {
  const context = useContext(CategoriesContext);

  if (!context) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }

  return context;
};
