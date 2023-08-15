import { configureStore } from "@reduxjs/toolkit";

import filmsReducer from "./reducers/filmsReducer";
import charactersReducer from "./reducers/charactersReducer";

const store = configureStore({
  reducer: {
    films: filmsReducer,
    characters: charactersReducer,
  },
});

export default store;
