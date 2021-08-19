import {
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAIL,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_FAIL,
} from "../constants/cartConstants";

export const getCartReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CART_SUCCESS:
      return { loading: false, cart: action.payload };
    case GET_CART_FAIL:
      return { loading: false, error: action.payload };
    case ADD_CART_REQUEST:
      return { loading: true };
    case ADD_CART_SUCCESS:
      return { loading: false, cart: action.payload };
    case ADD_CART_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
