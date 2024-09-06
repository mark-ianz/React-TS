import React, { useEffect, useState } from "react";

type Props = {};

export default function ShopLandingPage({}: Props) {
  const [productes, setProducts] = useState([]);

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
