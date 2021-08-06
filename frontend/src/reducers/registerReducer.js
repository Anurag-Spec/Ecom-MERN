import {
  USER_SIGNUP_FAILED,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/Registerconstants";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };
    case USER_SIGNUP_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNUP_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
