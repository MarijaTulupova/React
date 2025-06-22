import { useParams } from "react-router-dom";

import "./Home.css";
import Categories from "../components/Categories/Categories";
import ProductsList from "../components/ProductsList/ProductsList";
import HomepageHeader from "../components/HomepageHeader/HomepageHeader";

export const Home = () => {
  const { categoryName } = useParams();

  return (
    <div className="home-container">
      <HomepageHeader />
      <Categories />
      {categoryName && <ProductsList />}
    </div>
  );
};
