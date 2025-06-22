import { memo } from "react";

import "./ProductCard.css";

type ProductProps = {
  image: string;
  title: string;
  price: number;
  category: string;
};

const ProductCard = ({ image, title, price, category }: ProductProps) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default memo(ProductCard);
