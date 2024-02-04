import cartImg from "../assets/images/cart.svg";
import searchImg from "../assets/images/search.svg";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Connect navbar links to website pages
const Navbar = ({ cartCount }) => {
  return (
    <header className={styles.header}>
      <div className={styles.navLogo}>Sonic Aura</div>
      <nav className={styles.navbar}>
        <Link className={styles.linkNav} to="/">
          Home
        </Link>
        <a className={styles.linkNav} href="">
          Shop
        </a>
        <a className={styles.linkNav} href="">
          About
        </a>
        <a className={styles.linkNav} href="">
          Blog
        </a>
        <a className={styles.linkNav} href="">
          Contact Us
        </a>
      </nav>
      <div className={styles.rightHeaderMenu}>
        <div className="login">login</div>
        <img src={searchImg} alt="Search icon" />
        <div className={styles.cartContainer}>
          <img src={cartImg} alt="Cart icon" />
          {cartCount > 0 && <div className={styles.badge}>{cartCount}</div>}
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  cartCount: PropTypes.number,
};

export default Navbar;
