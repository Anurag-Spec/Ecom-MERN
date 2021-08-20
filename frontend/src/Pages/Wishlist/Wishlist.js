import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetWishList } from "../../actions/getWishList";
import { RemoveWishList } from "../../actions/removeWishList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function WishList() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const getWishList = useSelector((state) => state.getWishList);
  const { wishList } = getWishList;

  useEffect(() => {
    setEmail(userInfo.user.email);
    dispatch(GetWishList(email));
  }, [email, dispatch]);

  return (
    <div>
      <div className="wholeCart">
        {wishList?.map((item) => (
          <div className="cartProduct">
            <img className="cartProduct-image" src={item.image} alt="product" />
            <div className="cartProduct-details">
              <div className="cartProduct-name">{item.name}</div>
              <div className="cartProduct-brand">{item.brand}</div>
              <button onClick={() => dispatch(RemoveWishList(email, item.id))}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishList;
