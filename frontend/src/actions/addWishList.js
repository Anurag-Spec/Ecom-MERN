import axios from "axios";
import {
  ADD_WISHLIST_SUCCESS,
  ADD_WISHLIST_FAIL,
} from "../constants/wishListConstants";

export const AddWish = (email, id) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:5000/api/addWish", {
      email,
      id,
    });
    dispatch({ type: ADD_WISHLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_WISHLIST_FAIL, payload: error.message });
  }
};
