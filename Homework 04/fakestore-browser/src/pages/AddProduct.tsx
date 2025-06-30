import { useState } from "react";
import AddProductForm from "../components/AddProductForm/AddProductForm";
import ProductCard from "../components/ProductCard/ProductCard";
import "./AddProduct.css";
import type { Product } from "../types/product.type";
import { useCategories } from "../context/CategoriesContext";

const AddProduct = () => {
  const { error } = useCategories();
  const [recentlyCreatedProduct, setRecentlyCreatedProduct] = useState<
    Product | undefined
  >(undefined);

  const addRecentlyCreatedProduct = (newProduct: Product) => {
    setRecentlyCreatedProduct(newProduct);
  };

  const clearRecentlyCreatedProduct = () => {
    setRecentlyCreatedProduct(undefined);
  };

  if (error) {
    return (
      <div className="add-product-container">
        <span className="categories-error-message">{error}</span>
      </div>
    );
  }

  return (
    <div className="add-product-container">
      <h1 className="add-product-header">Add new product</h1>
      <AddProductForm
        addRecentlyCreatedProduct={addRecentlyCreatedProduct}
        clearRecentlyCreatedProduct={clearRecentlyCreatedProduct}
      />
      {recentlyCreatedProduct && (
        <div className="new-product-container">
          <ProductCard
            image={recentlyCreatedProduct.image}
            title={recentlyCreatedProduct.title}
            price={recentlyCreatedProduct.price}
            category={recentlyCreatedProduct.category}
            description={recentlyCreatedProduct.description}
          />
        </div>
      )}
    </div>
  );
};

export default AddProduct;
