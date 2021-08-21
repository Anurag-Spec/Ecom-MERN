import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/actions";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Filterpage from "../../Components/filterPage/filterPage";
import { AddCart } from "../../actions/addCart";
import { AddWish } from "../../actions/addWishList";

function Products() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [email, setEmail] = useState("");
  const [showSort, setShowSort] = useState(false);
  const [isSorted, setisSorted] = useState("");
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const [showFilter, setShowFilter] = useState(false);
  const { error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(isSorted));
    setEmail(userInfo.user.email);
  }, [dispatch, isSorted, showSort]);

  if (showFilter) {
    return (
      <div>
        <Filterpage toggleFilter={(showFilter) => setShowFilter(showFilter)} />
      </div>
    );
  } else {
    return (
      <div>
        {error ? (
          <div>{error}</div>
        ) : (
          <div className="card-container">
            <div className="bottom-bar">
              <div
                onClick={() => setShowSort(!showSort)}
                className="bottom-bar-option"
              >
                Sort
              </div>

              <div
                onClick={() => {
                  setShowFilter(!showFilter);
                }}
                className="bottom-bar-option"
              >
                Filter
              </div>
            </div>
            {showSort ? (
              <div className="sort-list">
                <div
                  className="sort-list-item"
                  onClick={() => {
                    setisSorted("HightoLow");
                    setShowSort(false);
                  }}
                >
                  High to Low
                </div>
                <div
                  className="sort-list-item"
                  onClick={() => {
                    setisSorted("LowtoHigh");
                    setShowSort(false);
                  }}
                >
                  Low To High
                </div>
              </div>
            ) : undefined}
            {products?.map((product) => (
              <div className="long-cards">
                <Link className="products-link" to={`/products/${product.id}`}>
                  <div>
                    <img src={product.image} alt="" />
                  </div>

                  <div className="card-text-sub ">{product.name}</div>

                  <div className="card-text">{product.brand}</div>
                  <div className="card-text">Price: £{product.Price}</div>
                </Link>
                <div className="card-btn-container">
                  <button
                    onClick={(e) => dispatch(AddCart(email, product.id))}
                    className="card-button"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                  </button>

                  <button
                    onClick={(e) => dispatch(AddWish(email, product.id))}
                    className="card-button"
                  >
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
