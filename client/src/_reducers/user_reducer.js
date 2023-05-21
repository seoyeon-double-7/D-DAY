import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  NEW_FOOTPRINT,
  GET_USER,
  GET_POST,
} from "../_actions/types";

export default function f(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginSuccess: action.payload,
        user: { user_id: action.user_id },
      };
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case GET_USER:
      return { ...state, getPayload: action.payload };
    case NEW_FOOTPRINT:
      return { ...state, postSuccess: action.payload };
    case GET_POST:
      return { ...state, postData: action.payload };
    default:
      return state;
  }
}
