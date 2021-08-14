import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, listProducts } from "../../actions/actions";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Filterpage from "../../Components/filterPage/filterPage";

function Products() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const [showFilter, setShowFilter] = useState(false);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  if (showFilter) {
    return (
      <div>
        <Filterpage toggleFilter={(showFilter) => setShowFilter(showFilter)} />
      </div>
    );
  } else {
    return (
      <div>
        {loading ? (
          <div>Loading</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="card-container">
            <div className="bottom-bar">
              <div className="bottom-bar-option">Sort</div>
              <div
                onClick={() => {
                  setShowFilter(!showFilter);
                }}
                className="bottom-bar-option"
              >
                Filter
              </div>
            </div>
            {products.map((product) => (
              <div className="long-cards">
                <Link className="products-link" to={`/products/${product.id}`}>
                  <div>
                    <img src={product.image} alt="" />
                  </div>

                  <div className="card-text-sub ">{product.name}</div>

                  <div className="card-text">{product.brand}</div>
                </Link>
                <div className="card-btn-container">
                  <button className="card-button">
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                  </button>
                  <button className="card-button">
                    <FontAwesomeIcon icon={faHeart} size="2x" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default Products;
