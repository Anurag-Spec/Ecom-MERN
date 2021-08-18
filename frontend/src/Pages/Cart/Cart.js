import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCart } from "../../actions/getCart";
function Cart() {
  const [email, setEmail] = useState("ankit@gmail.com");
  const dispatch = useDispatch();
  const getCart = useSelector((state) => state.getCart);
  const { loading, error, products } = getCart;

  useEffect(() => {
    dispatch(GetCart(email));
  }, [dispatch]);

  console.log(products, "product");

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>Here</div>
      )}
    </div>
  );
}

export default Cart;
