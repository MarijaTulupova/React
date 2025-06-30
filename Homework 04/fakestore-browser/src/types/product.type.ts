export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

export type CreateProductProps = {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};
