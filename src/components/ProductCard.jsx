import styles from "../styles/ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImg}
        src={props.imgUrl}
        alt={"Image of " + props.title}
      />
      <div className={styles.cardInfo}>
        <div className={styles.cardTitle}>{props.title}</div>
        <div className={styles.cardPrice}>{"$" + props.price}</div>
      </div>
      <div className={styles.addToCart}>
        <input
          type="number"
          name="quantity"
          className={styles.quantitySelector}
          step={1}
          min="0"
          max="99"
          defaultValue={0}
        />
        <button className={styles.addToCartBtn} type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
