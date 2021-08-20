import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { productListReducer } from "./reducers/productReducers";
import { userSigninReducer } from "./reducers/userReducer";
import { userRegisterReducer } from "./reducers/registerReducer";
import { getCartReducer } from "./reducers/cartReducer";
import { getWishListReducer } from "./reducers/wishListReducer";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
  productList: productListReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  getCart: getCartReducer,
  getWishList: getWishListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
