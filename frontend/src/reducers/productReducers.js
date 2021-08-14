import {
  FILTER_PRODUCTS_BY_BRAND,
  FILTER_PRODUCTS_BY_CATEGORY,
  FILTER_PRODUCTS_BY_REVIEWS,
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
      return {
        Category: action.payload.category,
        products: action.payload.products,
      };
    case FILTER_PRODUCTS_BY_BRAND:
      return {
        Brand: action.payload.brand,
        products: action.payload.products,
      };
    case FILTER_PRODUCTS_BY_REVIEWS:
      return {
        Reviews: action.payload.reviews,
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
