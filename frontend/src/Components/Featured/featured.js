import { React, useEffect } from "react";
import { useSelector } from "react-redux";

function Featured() {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          <h3 className="featured-title">Featured Products</h3>
          <img className="featured-image" src={products[0].image} alt="" />
          <img className="featured-image" src={products[7].image} alt="" />
          <img className="featured-image" src={products[4].image} alt="" />
          <button className="featured-btn">Show All</button>
        </div>
      )}
    </div>
  );
}

export default Featured;
