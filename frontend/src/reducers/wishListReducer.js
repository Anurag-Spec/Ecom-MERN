import {
  GET_WISHLIST_SUCCESS,
  GET_WISHLIST_FAIL,
  ADD_WISHLIST_SUCCESS,
  ADD_WISHLIST_FAIL,
  REMOVE_WISHLIST_SUCCESS,
  REMOVE_WISHLIST_FAIL,
} from "../constants/wishListConstants";

export const getWishListReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_WISHLIST_SUCCESS:
      return { wishList: action.payload };
    case GET_WISHLIST_FAIL:
      return { error: action.payload };
    case ADD_WISHLIST_SUCCESS:
      return { wishList: action.payload };
    case ADD_WISHLIST_FAIL:
      return { error: action.payload };
    case REMOVE_WISHLIST_SUCCESS:
      return { wishList: action.payload };
    case REMOVE_WISHLIST_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
