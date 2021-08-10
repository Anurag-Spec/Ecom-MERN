import {
  FILTER_PRODUCTS_BY_CATEGORY,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const productListReducer = (
  state = { products: [], loading: true },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case FILTER_PRODUCTS_BY_CATEGORY:
      console.log(action, "actions");
      return {
        Category: action.payload.Category,
        products: action.payload.products,
      };

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload.data.products };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
