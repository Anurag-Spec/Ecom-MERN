import axios from "axios";
import {
  REMOVE_WISHLIST_SUCCESS,
  REMOVE_WISHLIST_FAIL,
} from "../constants/wishListConstants";

export const RemoveWishList = (email, id) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:5000/api/removeWish", {
      email,
      id,
    });
    dispatch({ type: REMOVE_WISHLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REMOVE_WISHLIST_FAIL, payload: error.message });
  }
};
