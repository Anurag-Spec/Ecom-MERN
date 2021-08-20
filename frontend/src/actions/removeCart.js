import axios from "axios";
import {
  REMOVE_CART_SUCCESS,
  REMOVE_CART_FAIL,
} from "../constants/cartConstants";

export const RemoveCart = (email, id) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:5000/api/removeCart", {
      email,
      id,
    });
    dispatch({ type: REMOVE_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REMOVE_CART_FAIL, payload: error.message });
  }
};
