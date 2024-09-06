import { useEffect, useState } from "react";

type Props = {};

type Category = {
  id: number;
  name: string;
  image: string;
};

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
};

export default function ShopLandingPage({}: Props) {
  const [productes, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const result = await response.json();
      console.log(result);
    };

    fetchProducts();
  }, []);

  return <div>LandingPage</div>;
}
