import { combineReducers } from "redux";
import homeReducer from "./routes/home/home.reducer";

export default combineReducers({
  home: homeReducer
});