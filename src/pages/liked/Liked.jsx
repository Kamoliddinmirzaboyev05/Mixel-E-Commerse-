import React from "react";
import "./Liked.css";
import ProductCard from "../../components/productCard/ProductCard";
function Liked() {
  return (
    <div className="likedPage">
      <div className="container">
        <div className="pageWay">
          <p>Главная </p>
          <p>&gt;</p>
          <p>Изброанное</p>
        </div>
        <h2 className="pageTitle">Избранное</h2>
        <div className="productsBlock">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Liked;
