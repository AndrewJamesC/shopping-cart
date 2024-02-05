import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [clickedProductId, setClickedProductId] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [cartClicked, setCartClicked] = useState(false);

  function handleClick(e) {
    if (e.target.tagName === "INPUT" || e.target.tagName === "BUTTON") {
      return;
    }
    let target = e.target;
    while (!target.id) {
      target = target.parentNode;
    }

    setClickedProductId(target.id);
  }

  function increaseCartCount(quantitySelected) {
    console.log("app " + quantitySelected);
    setCartCount((prevCount) => prevCount + Number(quantitySelected));
    console.log(cartCount + " cart count");
  }

  function handleCartClick() {
    setCartClicked((prevState) => !prevState);
  }
  return (
    <>
      <Navbar cartCount={cartCount} handleCartClick={handleCartClick} />
      {cartClicked && <Cart />}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleClick={(e) => handleClick(e)}
              increaseCartCount={(quantitySelected) =>
                increaseCartCount(quantitySelected)
              }
            />
          }
        />
        <Route path="product" element={<ProductPage id={clickedProductId} />} />
      </Routes>
    </>

    // <div className="app-container">
    //   <Navbar />
    //   <Home handleClick={(e) => handleClick(e)} />
    //   {viewProductPage && <ProductPage id={clickedProductId} />}
    // </div>
  );
}

export default App;
