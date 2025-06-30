import { memo, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { useCategories } from "../../context/CategoriesContext";

const Categories = () => {
  const { categories, isLoading, error, fetchCategories } = useCategories();

  const navigate = useNavigate();
  const { categoryName } = useParams();

  useEffect(() => {
    void fetchCategories();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (categories.length === 0) {
    return <p>There are no categories at the moment.</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div className="category-buttons">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => navigate(`/category/${cat}`)}
          className={cat === categoryName ? "active" : ""}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default memo(Categories);
