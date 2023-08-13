import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import filmsReducer from "./reducers";

const rootReducer = combineReducers({
  films: filmsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
