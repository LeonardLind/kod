import { useEffect, useState } from "react";
import "./App.css";
import type { Product } from "./models/Product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3000/products");

      if (response.ok) {
        setProducts(await response.json());
      }
    };

    if (products.length > 0) return;

    getData();
  });

  return (
    <>
      {products.map((p) => (
        <div key={p.id}>
          <h2>{p.name}</h2>
          <p>{p.price}</p>
          <button>Köp</button>
        </div>
      ))}
    </>
  );
}

export default App;
