import { combineReducers } from "redux";
import user from "./user_reducer";

// reducer가 나눠져 있는데 combineReducer을 이용하여
// root reducer에서 하나로 합침

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
