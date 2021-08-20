import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/actions";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Filterpage from "../../Components/filterPage/filterPage";
import { AddCart } from "../../actions/addCart";

function Products() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const [showFilter, setShowFilter] = useState(false);
  const { error, products } = productList;
  const getCart = useSelector((state) => state.getCart);

  useEffect(() => {
    dispatch(listProducts());
    setEmail(userInfo.user.email);
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
        {error ? (
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
            {products?.map((product) => (
              <div className="long-cards">
                <Link className="products-link" to={`/products/${product.id}`}>
                  <div>
                    <img src={product.image} alt="" />
                  </div>

                  <div className="card-text-sub ">{product.name}</div>

                  <div className="card-text">{product.brand}</div>
                </Link>
                <div className="card-btn-container">
                  <button
                    onClick={(e) => dispatch(AddCart(email, product.id))}
                    className="card-button"
                  >
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
