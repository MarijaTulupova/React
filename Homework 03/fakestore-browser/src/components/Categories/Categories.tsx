import { memo, useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { getCategories } from "../../services/api";

const Categories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const navigate = useNavigate();
  const { categoryName } = useParams();

  useEffect(() => {
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
