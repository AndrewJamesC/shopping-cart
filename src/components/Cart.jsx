// import { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Cart.module.css";

const Cart = ({ cartContents }) => {
  const cartItems = cartContents.map((item, i) => {
    return (
      <div className={styles.cartProductContainer} key={i}>
        <p>{item.title}</p>
        <img
          className={styles.cartProductImage}
          src={item.image}
          alt={item.title}
        />
        <p>Quantity :{item.quantity}</p>
        <p>Price: {item.price / 100}</p>
        <p>Total:{"$" + item.subTotal / 100}</p>
      </div>
    );
  });

  let calculatedSubtotal = 0;
  cartContents.forEach((element) => {
    calculatedSubtotal += element.subTotal;
  });

  return (
    <div className={styles.cartContainer}>
      {cartItems}
      <p className={styles.cartSubtotal}>{`Subtotal: $${
        calculatedSubtotal / 100
      }`}</p>
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
