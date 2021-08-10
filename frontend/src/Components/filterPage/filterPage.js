import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./filterPage.css";

function Filterpage() {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const [showcat, setShowCat] = useState(false);
  const [showbrand, setShowBrand] = useState(false);
  const [showstock, setShowStock] = useState(false);
  const [showreviews, setShowReviews] = useState(false);

  return (
    <div className="filter-main">
      <aside className="filter-option-cont">
        <div
          onClick={() => {
            setShowCat(!showcat);
          }}
          className="filter-option"
        >
          Category
        </div>
        <div
          onClick={() => {
            setShowBrand(!showbrand);
          }}
          className="filter-option"
        >
          Brand
        </div>
        <div
          onClick={() => {
            setShowStock(!showstock);
          }}
          className="filter-option"
        >
          In-stock
        </div>
        <div
          onClick={() => {
            setShowReviews(!showreviews);
          }}
          className="filter-option"
        >
          Reviews
        </div>
      </aside>
      {showcat && <div>cat</div>}
      {showbrand && <div>brand</div>}
      {showstock && <div>Stock</div>}
      {showreviews && <div>Reviews</div>}
    </div>
  );
}

export default Filterpage;
