import {
  GET_CART_SUCCESS,
  GET_CART_FAIL,
  ADD_CART_SUCCESS,
  ADD_CART_FAIL,
  REMOVE_CART_SUCCESS,
  REMOVE_CART_FAIL,
} from "../constants/cartConstants";

export const getCartReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CART_SUCCESS:
      return { cart: action.payload };
    case GET_CART_FAIL:
      return { error: action.payload };
    case ADD_CART_SUCCESS:
      return { cart: action.payload };
    case ADD_CART_FAIL:
      return { error: action.payload };
    case REMOVE_CART_SUCCESS:
      return { cart: action.payload };
    case REMOVE_CART_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
