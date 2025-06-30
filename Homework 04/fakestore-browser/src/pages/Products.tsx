import "./Products.css";
import ProductsList from "../components/ProductsList/ProductsList";

export const Products = () => {
  return (
    <div className="products-container">
      <h1 className="products-header">All Products</h1>
      <ProductsList />
    </div>
  );
};
