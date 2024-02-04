import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import "./App.css";

function App() {
  const [clickedProductId, setClickedProductId] = useState("");

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
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home handleClick={(e) => handleClick(e)} />}
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
