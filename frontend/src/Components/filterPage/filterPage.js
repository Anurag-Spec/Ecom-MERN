import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../actions/actions";
import "./filterPage.css";

function Filterpage() {
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  const [showcat, setShowCat] = useState(false);
  const [showbrand, setShowBrand] = useState(false);
  const [showstock, setShowStock] = useState(false);
  const [showreviews, setShowReviews] = useState(false);
  const [category, setCategory] = useState("");
  const clearFilter = () => {
    setCategory("");
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (category) {
      dispatch(filterProducts(products, category));
    }
  }, [dispatch, category]);

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
      <div className="filter-list">
        {showcat && (
          <div className="filter-list-item">
            <h4>Category</h4>
            {[...new Set(products.map((product) => product.Category))].map(
              (cat) => (
                <div>
                  <input
                    type="checkbox"
                    id="category"
                    name="cateogry"
                    value="cat"
                    onChange={() => setCategory(cat)}
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
            {[...new Set(products.map((product) => product.brand))].map(
              (brand) => (
                <div>
                  <input
                    type="checkbox"
                    id="brand"
                    name="brand"
                    value="brand"
                  />
                  <label for="category"> {brand}</label>
                </div>
              )
            )}
          </div>
        )}
        {showstock && (
          <div className="filter-list-item">
            <h4>InStock</h4>
            {[...new Set(products.map((product) => product.InStock))].map(
              (stock) => (
                <div>
                  <input
                    type="checkbox"
                    id="brand"
                    name="brand"
                    value="brand"
                  />
                  <label for="category"> {stock}</label>
                </div>
              )
            )}
          </div>
        )}
        {showreviews && <div className="filter-list-item">Reviews</div>}
      </div>
    </div>
  );
}

export default Filterpage;
