import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/actions";
import "./Products.css";

function Products() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="card-container">
          {products.map((product) => (
            <div className="long-cards">
              <div>
                <img src={product.image} alt="" />
              </div>
              <div className="card-text ">{product.name}</div>
              <div className="card-text ">{product.brand}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Products;
