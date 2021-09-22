import { React, useEffect, useState } from "react";
import "./Carousel.css";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../actions/actions";

function Carousel() {
  const [imageIndex, setImageIndex] = useState(0);
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  if (true) {
    setTimeout(() => {
      if (imageIndex < products?.length - 1) {
        setImageIndex(imageIndex + 1);
      } else {
        setImageIndex(0);
      }
    }, 4000);
  }

  useEffect(
    () => {
      dispatch(listProducts());
    },
    [dispatch],
    () => {
      clearTimeout();
    }
  );

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="image-container">
          <img
            className="carousel-image"
            src={products[imageIndex].image}
            alt="product"
          />
        </div>
      )}
    </div>
  );
}

export default Carousel;
