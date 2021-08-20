import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetWishList } from "../../actions/getWishList";

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishList;
