import {
  ADD_CART_FAIL,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
} from "../constants/cartConstants";

export const getCartReducer = (state = {}, action) => {
  switch (action.type) {
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
