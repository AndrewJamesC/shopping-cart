// import { useEffect } from "react";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  //   const fetchCartData = async () => {
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/carts/5");
  //       const json = await response.json();
  //       console.log(json);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   useEffect(() => {
  //     fetchCartData();
  //   }, []);
  return (
    <div className={styles.cartContainer}>
      <p className={styles.cartSubtotal}>{`Subtotal: `}</p>
      <button className={styles.checkoutButton} type="button">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
