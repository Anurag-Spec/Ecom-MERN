import { React } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./featured.css";

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
        <div className="featured-section">
          <h3 className="featured-title">Featured Products</h3>
          <div className="featured-img-container">
            <img className="featured-image" src={products[0].image} alt="" />
            <img className="featured-image" src={products[7].image} alt="" />
            <img className="featured-image" src={products[4].image} alt="" />
          </div>
          <Link className="link" to="/products">
            <button className="featured-btn">Show All</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Featured;
