// Import React hooks for state management and side effects
import { useEffect, useState } from "react";
// Import global CSS file for styling
import "./App.css";
// Import the Product type so we can strongly type our state
import type { Product } from "./models/Product";

// Main App component
function App() {
  // React state hook to store products fetched from backend
  // Initialized as an empty array of Product objects
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect runs after the component renders
  // Here we use it to fetch data from the backend API
  useEffect(() => {
    // Define an async function that fetches data
    const getData = async () => {
      // Call the backend API at http://localhost:3000/products
      const response = await fetch("http://localhost:3000/products");

      // If the response is successful, parse it as JSON and update state
      if (response.ok) {
        setProducts(await response.json());
      }
    };

    // Prevent refetching if we already have products
    if (products.length > 0) return;

    // Execute the async fetch function
    getData();
  });

  // Render JSX
  return (
    <>
      {/* Loop through products and render each one */}
      {products.map((p) => (
        // Each element in a list must have a unique key (here it's product id)
        <div key={p.id}>
          {/* Product name */}
          <h2>{p.name}</h2>

          {/* Product image */}
          <img src={p.imageUrl} alt={p.name} />

          {/* Product price */}
          <p>{p.price}</p>

          {/* A buy button (no functionality yet) */}
          <button>Köp</button>
        </div>
      ))}
    </>
  );
}

// Export App component so it can be used in index.tsx
export default App;
