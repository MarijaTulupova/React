import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import ProductCard from "../ProductCard/ProductCard";
import { getAllProducts, getProductsByCategory } from "../../services/api";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(undefined);

      try {
        if (categoryName) {
          const res = await getProductsByCategory(categoryName);
          setProducts(res.data);
        } else {
          const res = await getAllProducts();
          setProducts(res.data);
        }
      } catch (error) {
        console.error("ERROR HAPPENED", error);
        setError("Failed to fetch products.");
      } finally {
        setIsLoading(false);
      }
    };

    void fetchProducts();
  }, [categoryName]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (products.length === 0) {
    return <p>There are no products at the moment.</p>;
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default ProductsList;
