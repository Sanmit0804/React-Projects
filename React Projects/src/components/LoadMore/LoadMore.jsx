import React, { useEffect, useState } from "react";
import "./LoadMore.css";

const LoadMore = () => {
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(10);

  async function fetchData() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}`
      );
      const data = await response.json();
      setItems(data.products); // Store the products array in the items state
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  const handleLoadMore = () => {
    if (limit == 100) {
      console.log("Limit reached");
    } else {
      setLimit((prev) => prev + 10);
    }
    console.log(limit);
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, [limit]);

  return (
    <div className="load-more-container">
      <h2 className="heading">Load More Products</h2>
      <div className="product-grid">
        {items.map((product, index) => (
          <div key={product.id} className="product-card">
            {/* Display product image */}
            <img
              src={product.images[0]} // Show the first image from the product images array
              alt={product.title}
              className="product-image"
            />
            {/* Display product title */}
            <p className="product-title">{product.title}</p>
            {/* Display product description */}
            <p className="product-description">{product.description}</p>
            {/* Display product price */}
            <p className="product-price">Price: ${product.price}</p>
          </div>
        ))}
      </div>

      {limit == 100 ? (
        <div>All Products are listed</div>
      ) : (
        <button onClick={handleLoadMore}>Load more...</button>
      )}
    </div>
  );
};

export default LoadMore;
