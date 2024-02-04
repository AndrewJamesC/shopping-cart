import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import "./App.css";

function App() {
  const [clickedProductId, setClickedProductId] = useState("");
  const [viewProductPage, setViewProductPage] = useState(false);

  function handleClick(e) {
    if (e.target.tagName === "INPUT" || e.target.tagName === "BUTTON") {
      return;
    }
    let target = e.target;
    while (!target.id) {
      target = target.parentNode;
    }

    setClickedProductId(target.id);
    setViewProductPage(true);
  }
  return (
    <div className="app-container">
      <Navbar />
      <Home handleClick={(e) => handleClick(e)} />
      {viewProductPage && <ProductPage id={clickedProductId} />}
    </div>
  );
}

export default App;
