import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import ProductCard from "../ProductCard/ProductCard";
import { useProducts } from "../../context/ProductsContext";

const ProductsList = () => {
  const { products, isLoading, error, fetchProducts } = useProducts();
  const { categoryName } = useParams();

  useEffect(() => {
    void fetchProducts(categoryName);
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
