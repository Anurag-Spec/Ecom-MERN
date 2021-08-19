import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCart } from "../../actions/getCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
function Cart() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const getCart = useSelector((state) => state.getCart);
  const { loading, cart } = getCart;

  useEffect(() => {
    setEmail(userInfo.user.email);
  }, []);

  useEffect(() => {
    if (email) {
      dispatch(GetCart(email));
    }
  }, [dispatch, email]);

  return (
    <div>
      <div className="wholeCart">
        {cart?.map((item) => (
          <div className="cartProduct">
            <img className="cartProduct-image" src={item.image} alt="product" />
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
    </div>
  );
}

export default Cart;
