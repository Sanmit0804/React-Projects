import React, { useEffect, useState } from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }

  function handleScrollPercentage() {
    const handleHowMuchScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setScrollPercentage((handleHowMuchScroll / height) * 100);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  return (
    <div className="scroll-container container">
      <div className="scroll-progress-tracking-container">
        <div
          className="current-progress-bar"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
      )}
    </div>
  );
};

export default ScrollIndicator;
