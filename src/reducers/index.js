import moviesReducer from "./moviesReducer";
import {combineReducers} from "redux";

export default combineReducers({
    movies: moviesReducer
});
