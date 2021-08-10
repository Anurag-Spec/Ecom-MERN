import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, listProducts } from "../../actions/actions";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Products() {
  const [category, setCategory] = useState("Mouse");
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  console.log(productList, "prodlist");
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
    dispatch(filterProducts(products, category));
  }, [dispatch, category]);

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="card-container">
          {/* <div>
            <select name="category" id="category">
              <option value="mouse">mouse</option>
              <option value="Headphone">Headphone</option>
            </select>
          </div> */}
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
export default Products;
