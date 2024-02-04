import cartImg from "../assets/images/cart.svg";
import searchImg from "../assets/images/search.svg";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

// Connect navbar links to website pages
const Navbar = () => {
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
        <img src={cartImg} alt="Cart icon" />
      </div>
    </header>
  );
};

export default Navbar;
