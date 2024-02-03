import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import styles from "../styles/ProductCards.module.css";
const ProductCards = () => {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );
      const json = await response.json();
      setProductData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  function handleClick(e) {
    console.log(e.target);
  }

  const cards = productData.map((item) => {
    return (
      <ProductCard
        id={item.id}
        key={item.id}
        imgUrl={item.image}
        title={item.title}
        price={item.price}
        handleClick={(e) => handleClick(e)}
      />
    );
  });

  return <div className={styles.cardsContainer}>{cards}</div>;
};

export default ProductCards;
