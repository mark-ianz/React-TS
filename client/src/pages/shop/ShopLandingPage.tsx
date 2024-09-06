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
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const result = await response.json();
      setProducts(result);
      console.log(result);
    };

    fetchProducts();
  }, []);

  return (
    <main>
      <section>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div>
                {product.images.map((image) => (
                  <p>{image}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
