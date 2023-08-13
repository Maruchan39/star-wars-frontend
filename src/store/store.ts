import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import filmsReducer from "./reducers/filmsReducer";
import charactersReducer from "./reducers/charactersReducer";

const rootReducer = combineReducers({
  films: filmsReducer,
  characters: charactersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
