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
