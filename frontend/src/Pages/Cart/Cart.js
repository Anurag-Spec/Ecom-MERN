import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCart } from "../../actions/getCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
function Cart() {
  const [email, setEmail] = useState("ankit@gmail.com");
  const dispatch = useDispatch();
  const getCart = useSelector((state) => state.getCart);
  const { loading, cart } = getCart;

  useEffect(() => {
    dispatch(GetCart(email));
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="wholeCart">
          {cart?.map((item) => (
            <div className="cartProduct">
              <img
                className="cartProduct-image"
                src={item.image}
                alt="product"
              />
              <div className="cartProduct-details">
                <div className="cartProduct-name">{item.name}</div>
                <div className="cartProduct-brand">{item.brand}</div>
                <div className="cartProduct-quantity">
                  Quantity: {item.quantity}
                </div>
                <div>
                  <button>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
