import { memo } from "react";

import "./ProductCard.css";

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  category: string;
  description?: string;
};

const ProductCard = ({
  image,
  title,
  price,
  category,
  description,
}: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      {description && <p>{description}</p>}
    </div>
  );
};

export default memo(ProductCard);
