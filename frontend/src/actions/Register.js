import {
  USER_SIGNUP_FAILED,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/Registerconstants";
import Axios from "axios";

export const Register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await Axios.post("http://localhost:5000/api/users", {
      name,
      email,
      password,
    });
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAILED, payload: error.message });
  }
};
