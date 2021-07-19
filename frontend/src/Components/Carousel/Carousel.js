import { React, useEffect, useState } from "react";
import axios from "axios";

function Carousel() {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const getImageData = async () => {
      const { data } = await axios.get("api/products");
      setImageData(data);
    };
    getImageData();
  }, []);

  return (
    <div>
      <img src={imageData.products[0]} alt="hero-image" />
    </div>
  );
}

export default Carousel;
