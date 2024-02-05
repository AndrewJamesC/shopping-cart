// import { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Cart.module.css";

const Cart = ({ cartContents }) => {
  const cartItems = cartContents.map((item, i) => {
    return (
      <div key={i}>
        <p>{item.title}</p>
        <img src={item.image} alt={item.title} />
        <p>{item.quantity}</p>
        <p>{item.price}</p>
        <p>{"$" + item.subtotal}</p>
      </div>
    );
  });
  return (
    <div className={styles.cartContainer}>
      {cartItems}
      <p className={styles.cartSubtotal}>{`Subtotal: `}</p>
      <button className={styles.checkoutButton} type="button">
        Checkout
      </button>
    </div>
  );
};

Cart.propTypes = {
  cartContents: PropTypes.array,
};

export default Cart;