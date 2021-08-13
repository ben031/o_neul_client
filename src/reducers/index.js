import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({ loginReducer, mainReducer });

export default rootReducer;
