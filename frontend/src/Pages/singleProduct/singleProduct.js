import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AddCart } from "../../actions/addCart";
import { AddWish } from "../../actions/addWishList";
import "./singleProduct.css";
function Singleproduct() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [email, setEmail] = useState("");
  const productList = useSelector((state) => state.productList);
  const { error, products } = productList;
  const [name, setName] = useState("");
  const [prodId, setProdId] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [reviews, setReviews] = useState("");
  const [brand, setBrand] = useState("");
  const { id } = useParams();
  useEffect(() => {
    setEmail(userInfo.user.email);
    const newProduct = products.find((product) => product.id === id);
    setName(newProduct?.name);
    setImage(newProduct?.image);
    setDescription(newProduct?.description);
    setCategory(newProduct?.Category);
    setPrice(newProduct?.price);
    setReviews(newProduct?.reviews);
    setBrand(newProduct?.brand);
    setProdId(newProduct?.id);
  }, [id, products, userInfo.user.email]);
  const dispatch = useDispatch();
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
          <button
            onClick={() => dispatch(AddCart(email, prodId))}
            className="primary-button"
          >
            Add to Cart
          </button>
          <button
            onClick={(e) => dispatch(AddWish(email, prodId))}
            className="secondary-button"
          >
            Wishlist
          </button>
          <p className="description">{description}</p>
          <h5 className="price">{price}</h5>
          <p className="reviews">Reviews:{reviews}</p>
          <p className="category">
            Category: <strong>{category}</strong>
          </p>
          <Link className="primary-button" to="/products">
            Go back
          </Link>
        </div>
      )}
    </div>
  );
}

export default Singleproduct;
