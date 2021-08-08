import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./singleProduct.css";
function Singleproduct() {
  const productList = useSelector((state) => state.productList);
  const { error, products } = productList;
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [reviews, setReviews] = useState("");
  const [brand, setBrand] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const newProduct = products.find((product) => product.id === id);
    setName(newProduct?.name);
    setImage(newProduct?.image);
    setDescription(newProduct?.description);
    setCategory(newProduct?.Category);
    setPrice(newProduct?.price);
    setReviews(newProduct?.reviews);
    setBrand(newProduct?.brand);
  }, [id, products]);

  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : !name ? (
        <div>
          <div>Cannot find details</div>
          <Link className="primary-button" to="/products">
            Go back
          </Link>
        </div>
      ) : (
        <div>
          <h1>{name}</h1>
          <h2>{brand}</h2>
          <img className="prod-img" src={image} alt="prod" />
          <button className="primary-button">Add to Cart</button>
          <button className="secondary-button">Wishlist</button>
          <p className="description">{description}</p>
          <h5>{price}</h5>
          <p>Reviews:{reviews}</p>
          <p>
            Category: <strong>{category}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default Singleproduct;
