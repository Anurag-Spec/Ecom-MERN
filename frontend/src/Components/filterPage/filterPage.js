import React from "react";
import { useSelector } from "react-redux";
import "./filterPage.css";

function Filterpage() {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  return (
    <div className="filter-main">
      <aside className="filter-option-cont">
        <div className="filter-option">Category</div>
        <div className="filter-option">Brand</div>
        <div className="filter-option">In-stock</div>
        <div className="filter-option">Reviews</div>
      </aside>
    </div>
  );
}

export default Filterpage;
