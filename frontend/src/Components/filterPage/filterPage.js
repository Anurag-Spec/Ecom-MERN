import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, listProducts } from "../../actions/actions";
import "./filterPage.css";

function Filterpage(props) {
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  console.log(products, "prod");

  const [showcat, setShowCat] = useState(true);
  const [showbrand, setShowBrand] = useState(false);

  const [showreviews, setShowReviews] = useState(false);

  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [reviews, setReviews] = useState([]);
  const clearFilter = () => {
    setCategory("");
  };

  const dispatch = useDispatch();

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
            setShowReviews(!showreviews);
          }}
          className="filter-option"
        >
          Reviews
        </div>
      </aside>
      <div className="filter-list">
        {showcat && (
          <div className="filter-list-item">
            <h4>Category</h4>
            {[...new Set(products?.map((product) => product.Category))].map(
              (cat) => (
                <div>
                  <input
                    type="checkbox"
                    id="category"
                    name="cateogry"
                    value="cat"
                    onChange={() => setCategory([...category, cat])}
                  />
                  <label for="category">{cat}</label>
                </div>
              )
            )}
          </div>
        )}
        {showbrand && (
          <div className="filter-list-item">
            <h4>Brand</h4>
            {[...new Set(products?.map((product) => product.brand))].map(
              (brnd) => (
                <div>
                  <input
                    type="checkbox"
                    id="brand"
                    name="brand"
                    value="brand"
                    onChange={() => setBrand([...brand, brnd])}
                  />
                  <label for="category"> {brnd}</label>
                </div>
              )
            )}
          </div>
        )}

        {showreviews && (
          <div className="filter-list-item">
            <h4>Reviews</h4>
            {[...new Set(products?.map((product) => product.reviews))].map(
              (rev) => (
                <div>
                  <input
                    type="checkbox"
                    id="brand"
                    name="brand"
                    value="brand"
                    onChange={() => setReviews([...reviews, rev])}
                  />
                  <label for="category"> {rev}</label>
                </div>
              )
            )}
          </div>
        )}
      </div>
      <button
        className="btn-apply"
        onClick={() => {
          props.toggleFilter(false);
          dispatch(filterProducts(products, category, brand, reviews));
        }}
      >
        Apply
      </button>
      <button className="btn-clear" onClick={clearFilter}>
        Clear
      </button>
    </div>
  );
}

export default Filterpage;
