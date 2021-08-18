import axios from "axios";
import {
  ADD_CART_FAIL,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
} from "../constants/cartConstants";

export const GetCart = (email) => async (dispatch) => {
  console.log(email, "email");
  dispatch({ type: ADD_CART_REQUEST, payload: { email } });
  try {
    const { data } = await axios.post("http://localhost:5000/api/add1Cart", {
      email,
    });

    dispatch({ type: ADD_CART_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({ type: ADD_CART_FAIL, payload: error.message });
  }
};
