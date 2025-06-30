import { useForm } from "react-hook-form";

import { useCategories } from "../../context/CategoriesContext";
import "./AddProductForm.css";
import type { CreateProductProps, Product } from "../../types/product.type";
import { addProduct } from "../../services/api";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { useProducts } from "../../context/ProductsContext";

type AddProductFormProps = {
  addRecentlyCreatedProduct: (newProduct: Product) => void;
  clearRecentlyCreatedProduct: () => void;
};

const AddProductForm = ({
  addRecentlyCreatedProduct,
  clearRecentlyCreatedProduct,
}: AddProductFormProps) => {
  const { categories, fetchCategories } = useCategories();
  const { storeNewProduct } = useProducts();
  const [isCreating, setIsCreating] = useState(false);
  const [isCreationSuccessful, setIsCreationSuccessful] = useState(false);
  const [addProductError, setAddProductError] = useState("");

  useEffect(() => {
    void fetchCategories();
  }, []);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateProductProps>({
    mode: "onChange",
  });

  const isButtonDisabled = Object.keys(errors).length > 0;

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isCreating) {
      return;
    }

    setAddProductError("");
    setIsCreationSuccessful(false);
    clearRecentlyCreatedProduct();

    await handleSubmit(async (data) => {
      try {
        setIsCreating(true);
        const newProduct = await addProduct(data);
        storeNewProduct(newProduct);
        addRecentlyCreatedProduct(newProduct);
        setIsCreationSuccessful(true);
        reset();
      } catch (error) {
        console.error("Add product error:", error);
        setAddProductError("Something went wrong, please try again later");
      } finally {
        setIsCreating(false);
      }
    })(e);
  };

  return (
    <form onSubmit={handleCreate}>
      <div className="form-row">
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Title should be at least 3 characters",
              },
            })}
          />
          {errors.title && (
            <span className="error-message">{errors.title.message}</span>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            {...register("price", {
              required: "Price is required",
              min: {
                value: 1,
                message: "Price must be positive number",
              },
            })}
          />
          {errors.price && (
            <span className="error-message">{errors.price.message}</span>
          )}
        </div>
      </div>
      <div className="form-row">
        <div className="input-container">
          <label htmlFor="description">Description</label>
          <textarea
            rows={5}
            id="description"
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Description should be at least 10 characters",
              },
              maxLength: {
                value: 500,
                message: "Description should be max 500 characters",
              },
            })}
          />
          {errors.description && (
            <span className="error-message">{errors.description.message}</span>
          )}
        </div>
      </div>
      <div className="form-row">
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            defaultValue=""
            {...register("category", {
              required: "Category is required",
            })}
          >
            <option value="" disabled hidden>
              -- Select a category --
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className="error-message">{errors.category.message}</span>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            {...register("image", {
              required: "Image is required",
              pattern: {
                value: /^(https?:\/\/(?:www\.)?[^\s]+)$/i,
                message:
                  "Must be a valid image URL (http/https and .png/.jpg/etc)",
              },
            })}
          />
          {errors.image && (
            <span className="error-message">{errors.image.message}</span>
          )}
        </div>
      </div>
      <button
        type="submit"
        className={isButtonDisabled ? "add-button disabled" : "add-button"}
        disabled={isButtonDisabled}
      >
        {isCreating ? <LoadingSpinner size="small" /> : "Add Product"}
      </button>

      {addProductError && (
        <span className="form-submit-error">{addProductError}</span>
      )}

      {isCreationSuccessful && (
        <span className="success-message">
          Your product has been successfully added
        </span>
      )}
    </form>
  );
};

export default AddProductForm;
