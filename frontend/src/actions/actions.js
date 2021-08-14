import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  FILTER_PRODUCTS_BY_CATEGORY,
  FILTER_PRODUCTS_BY_BRAND,
  FILTER_PRODUCTS_BY_REVIEWS,
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

export const filterProducts =
  (products, category, brand, reviews) => (dispatch) => {
    if (category.length > 0) {
      dispatch({
        type: FILTER_PRODUCTS_BY_CATEGORY,
        payload: {
          category: category,
          products: products.filter((item) => category.includes(item.Category)),
        },
      });
    }

    if (brand.length > 0) {
      dispatch({
        type: FILTER_PRODUCTS_BY_BRAND,
        payload: {
          brand: brand,
          products: products.filter((item) => brand.includes(item.brand)),
        },
      });
    }
    if (reviews.length > 0) {
      dispatch({
        type: FILTER_PRODUCTS_BY_REVIEWS,
        payload: {
          reviews: reviews,
          products: products.filter((item) => reviews.includes(item.reviews)),
        },
      });
    }
  };
