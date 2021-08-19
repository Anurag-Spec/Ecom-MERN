import axios from "axios";
import {
  ADD_CART_FAIL,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
} from "../constants/cartConstants";
import { GetCart } from "./getCart";

export const AddCart = (email, id) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:5000/api/addCart", {
      email,
      id,
    });
    dispatch({ type: ADD_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_CART_FAIL, payload: error.message });
  }
};
