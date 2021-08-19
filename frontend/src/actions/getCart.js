import axios from "axios";
import {
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAIL,
} from "../constants/cartConstants";

export const GetCart = (email) => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST, payload: { email } });
  try {
    const { data } = await axios.post("http://localhost:5000/api/add1Cart", {
      email,
    });
    dispatch({ type: GET_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CART_FAIL, payload: error.message });
  }
};
