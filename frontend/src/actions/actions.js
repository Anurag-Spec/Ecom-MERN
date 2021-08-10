import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  FILTER_PRODUCTS_BY_CATEGORY,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await axios
      .get("http://localhost:5000/api/products")
      .then((res) => dispatch({ type: PRODUCT_LIST_SUCCESS, payload: res }));
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const filterProducts = (products, category) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_CATEGORY,
    payload: {
      category: category,
      products: products.filter((product) => product.Category === category),
    },
  });
};
