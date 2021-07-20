import { React, useEffect, useState } from "react";
import "./Carousel.css";

function Carousel() {
  const [data, setData] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((response) => setData(response));
  }

  setTimeout(() => {
    if (imageIndex < data.products?.length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  }, 4000);

  if (data.products === undefined) {
    return <h3>Loading</h3>;
  } else {
    return (
      <div className="image-container">
        <img
          className="carousel-image"
          src={data.products[imageIndex].image}
          alt="product"
        />
      </div>
    );
  }
}

export default Carousel;
